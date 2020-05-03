import {create} from 'apisauce'

export const config={

apiInstance:create(
{
 baseURL:"https://www.themealdb.com/api/json/v1/1/",
 timeout:20000,
 headers:{
     'Content-Type':'application/json'
 }

})
}