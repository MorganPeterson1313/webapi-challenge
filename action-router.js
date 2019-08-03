const express = require('express');
const router = express.Router();

const db = require('./data/helpers/actionModel');



router.get('/:id/actions', async (request, response) => {
    
    try{
    const actions = await
    db.get(request.params.id);

    if(actions){
        response.status(200).json(actions)
    } else {
        response.status(404).json({success: false, message:'Action cannot be found'})}

    }
    catch(err)  {
        response.status(500).json({success:false, err})
    }

})


router.post('/:id/actions', async (request, response) => {
    const actionInfo = {...request.body, project_id: request.params.id}
   try{
    const action = await
    db.insert(actionInfo)
        response.status(201).json({success:true, action});
    }
    catch(err){
        response.status(500).json({success:false, err});
    }

});


router.put('/:id/actions/:id', async (request, response) => {
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

    router.delete('/:id/actions/:id', async (request, response) => {
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















module.exports = router;