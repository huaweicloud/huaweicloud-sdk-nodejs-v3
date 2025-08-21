

export class InspectionVpcInfo {
    private 'inspection_vpc_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withInspectionVpcId(inspectionVpcId: string): InspectionVpcInfo {
        this['inspection_vpc_id'] = inspectionVpcId;
        return this;
    }
    public set inspectionVpcId(inspectionVpcId: string  | undefined) {
        this['inspection_vpc_id'] = inspectionVpcId;
    }
    public get inspectionVpcId(): string | undefined {
        return this['inspection_vpc_id'];
    }
    public withName(name: string): InspectionVpcInfo {
        this['name'] = name;
        return this;
    }
}