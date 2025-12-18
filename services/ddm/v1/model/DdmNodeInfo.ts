import { ActionInfo } from './ActionInfo';


export class DdmNodeInfo {
    public id?: string;
    public status?: string;
    public name?: string;
    private 'az_code'?: string;
    public actions?: Array<ActionInfo>;
    private 'subnet_id'?: string;
    public constructor() { 
    }
    public withId(id: string): DdmNodeInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): DdmNodeInfo {
        this['status'] = status;
        return this;
    }
    public withName(name: string): DdmNodeInfo {
        this['name'] = name;
        return this;
    }
    public withAzCode(azCode: string): DdmNodeInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withActions(actions: Array<ActionInfo>): DdmNodeInfo {
        this['actions'] = actions;
        return this;
    }
    public withSubnetId(subnetId: string): DdmNodeInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}