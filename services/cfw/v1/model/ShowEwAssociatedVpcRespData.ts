import { InspectionVpcInfo } from './InspectionVpcInfo';


export class ShowEwAssociatedVpcRespData {
    private 'inspection_vpc_list'?: Array<InspectionVpcInfo>;
    public constructor() { 
    }
    public withInspectionVpcList(inspectionVpcList: Array<InspectionVpcInfo>): ShowEwAssociatedVpcRespData {
        this['inspection_vpc_list'] = inspectionVpcList;
        return this;
    }
    public set inspectionVpcList(inspectionVpcList: Array<InspectionVpcInfo>  | undefined) {
        this['inspection_vpc_list'] = inspectionVpcList;
    }
    public get inspectionVpcList(): Array<InspectionVpcInfo> | undefined {
        return this['inspection_vpc_list'];
    }
}