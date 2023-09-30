import ApiConfig from '../../common/api'
import httpService, { headers } from '../../common/httpservice'
import { AdmissionDetails } from '../model/admissionModel'





export const postAdmissionApplicant=async(data:AdmissionDetails)=>await httpService.post(ApiConfig.applicantion,data,{headers:headers})


