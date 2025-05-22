import { ScrumStatusFlowDirectToVo } from './ScrumStatusFlowDirectToVo';


export class ScrumStatusFlowVo {
    public id?: string;
    public name?: string;
    private 'status_id'?: number;
    private 'direct_to'?: Array<ScrumStatusFlowDirectToVo>;
    public constructor() { 
    }
    public withId(id: string): ScrumStatusFlowVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScrumStatusFlowVo {
        this['name'] = name;
        return this;
    }
    public withStatusId(statusId: number): ScrumStatusFlowVo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withDirectTo(directTo: Array<ScrumStatusFlowDirectToVo>): ScrumStatusFlowVo {
        this['direct_to'] = directTo;
        return this;
    }
    public set directTo(directTo: Array<ScrumStatusFlowDirectToVo>  | undefined) {
        this['direct_to'] = directTo;
    }
    public get directTo(): Array<ScrumStatusFlowDirectToVo> | undefined {
        return this['direct_to'];
    }
}