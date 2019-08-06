const express = require('express');

const router = express.Router();
const db = require('./data/helpers/projectModel');



router.get('/', async (request, response) => {
    

    try{

        const projects = await
        db.get(request.params.id)
        response.status(200).json(projects);
    }
catch (err) {
    response.status(500).json({success:false,err})
}

});



router.post('/', async (request, response) => {

        try{
            const project = await
    db.insert(request.body)

                if(name && description){

                    response.status(201).json({success:true, project});
                }else{ response.status(400).json({success:false, message:'Please provide name and description for the project'})}
                }
            catch(err ){
                response.status(500).json({success:false, err});
            }
        
    });
                



    router.put('/:id', async (request, response) => {
        try{
            const updated = await
        db.update(request.params.id, request.body)
            if (updated){
            response.status(200).json({success: true, updated});
            }else {response.status(404).json({success:false, message:'the project you are looking for is not here'})
        }
    }
        catch(err){
            response.status(500).json({success:false, err})
        }
    

        });



        router.delete('/:id', async (request, response) => {
            try{
    
                const deleted = await
            db.remove(request.params.id)
                if(deleted) {
                    response.status(204).end();
                }else{
                    response.status(404).json({success:false, message:'the project you are looking for is not here'})
                }
            }
            catch(err) {
                response.status(500).json({success:false, err})
            }
        });

        router.get('/:id/actions/:id', async (request, response) => {

            const  actionInfo = {project_id: request.params.id}
            try{

            
                    const actions = await
                    db.getProjectActions(actionInfo)
                    response.status(200).json(actions);
                }
            catch (err) {
                response.status(500).json({success:false,err})
            }
            
            });




  module.exports = router;