const isAuthenticated= async (req,res,next) => {
    try{
        const token=req.cookie.token;
        console.log(token);
    }catch(error){
        console.log(error);
    }
}