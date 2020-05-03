import {config} from './Productconfig';
const {apiInstance}=config;
class servicecallproduct
{
allmenuitems()
{
    return new Promise((resolve,reject)=>{
        apiInstance.get("/categories.php").then((result)=>{
            resolve(result)
        }).catch((err)=>{
         reject(err)

        })


    })
}

}
export default new servicecallproduct;