import { ChangeServerOsWithCloudInitOption } from './ChangeServerOsWithCloudInitOption';


export class ChangeServerOsWithCloudInitRequestBody {
    private 'os-change'?: ChangeServerOsWithCloudInitOption;
    public constructor(osChange?: ChangeServerOsWithCloudInitOption) { 
        this['os-change'] = osChange;
    }
    public withOsChange(osChange: ChangeServerOsWithCloudInitOption): ChangeServerOsWithCloudInitRequestBody {
        this['os-change'] = osChange;
        return this;
    }
    public set osChange(osChange: ChangeServerOsWithCloudInitOption  | undefined) {
        this['os-change'] = osChange;
    }
    public get osChange(): ChangeServerOsWithCloudInitOption | undefined {
        return this['os-change'];
    }
}