
import request from "./request";
import qs from 'qs'
export type Order = 'asc'|'desc'
export interface params {
   page?:Number,
   p?:Number
   limit?:Number,
   l?:Number
   sortBy?:String,
   order?:Order
 }

export const useAPI = () => {

   const getEmployees = (params?:params)=> {
      return new Promise(async (resolve, reject) => {
         try {
            const res = await request.get("/employee",{
               params,
               paramsSerializer: (params:params) => {
                 return qs.stringify(params, { arrayFormat: 'brackets' })
              }
             });
            resolve(res)
         }
         catch (error) {
            reject(error)
         }
      })
   }
   const getCheckInInfo = (id:string)=> {
      return new Promise(async (resolve, reject) => {
         try {
            const res = await request.get(`/employee/${id}/checkin`);
            resolve(res)
         }
         catch (error) {
            reject(error)
         }
      })
   }
  
   return {
      getEmployees,
      getCheckInInfo
   }
}