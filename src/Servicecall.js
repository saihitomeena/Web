import {config} from './Config'; 
const {apiInstance} = config;
class servicecalls {
    allcountrylist()
    {
        return new Promise((resolve,reject)=>{
            apiInstance.get('/all').then((result)=>{
                resolve(result)
            }).catch((errexception)=>{
                 reject(errexception)   

            })
        })
    }
    callcountrylistbyname(countryname)
    {
        return new Promise((resolve,reject)=>{
            apiInstance.get('/name/'+countryname).then((result)=>{
                resolve(result);
            }).catch((errexception)=>{

                reject(errexception);
            })

        })

    }
    callcountrylisybyregion(val)
    {
        return new Promise((resolve,reject)=>{
            apiInstance.get('/region/'+val).then((result)=>{

                resolve(result);
            }).catch((err)=>{

                reject(err);
            })

        })
    }

}
export default new servicecalls;
