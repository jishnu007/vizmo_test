import { reactive } from "vue";
import { useAPI } from "../api/index";
export interface list {
  list: Array<any>;
  loading: boolean;
}
export interface list {
  list: Array<any>;
  loading: boolean;
}
export type Order = 'asc'|'desc'
export interface params {
  page?:Number,
  p?:Number
  limit?:Number,
  l?:Number
  sortBy?:String,
  order?:Order,
  search?:String
}
const employees = reactive<list>({
  list: [],
  loading: false,
});
const checkIn = reactive<list>({
  list: [],
  loading: false,
});

export const useEmployee = () => {
  const { getEmployees,getCheckInInfo } = useAPI();
  const fetchEmployees = async (params?: params) => {
    try {
      employees.loading = true;
      const response: any = await getEmployees(params);
      if (response.status >= 200 && response.status <= 204) {
        employees.list = response.data;
      }
    } catch (error) {
      console.log(error);
    } finally {
      employees.loading = false;
    }
  };
  const fetchCheckInInfo = async (id:string) => {
    try {
      checkIn.list=[]
      checkIn.loading = true;
      const response: any = await getCheckInInfo(id);
      if (response.status >= 200 && response.status <= 204) {
        checkIn.list=response.data
      }
    } catch (error) {
      console.log(error);
    }finally {
      checkIn.loading = false;
    }
  };
  return{
    fetchEmployees,
    fetchCheckInInfo,
    employees,
    checkIn
  }
};
