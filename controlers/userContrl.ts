export const login =(req, res)=>{
    //create admin cookie

    const {username, password} = req.body;
    console.log(username, password);

    if(username && password){
        res.cookie('role',{role:'admin'}, {maxAge:9939394949, httpOnly:true})
    }

    res.send({login:true})
}

export const adminPanel = (req, res)=>{
    res.send({adminPanel:true})
}

export const register =(req, res)=>{
    res.send({register:true})
}