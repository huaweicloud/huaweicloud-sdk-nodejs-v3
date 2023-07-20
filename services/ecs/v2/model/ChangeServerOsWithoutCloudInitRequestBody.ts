import { ChangeServerOsWithoutCloudInitOption } from './ChangeServerOsWithoutCloudInitOption';


export class ChangeServerOsWithoutCloudInitRequestBody {
    private 'os-change'?: ChangeServerOsWithoutCloudInitOption;
    public constructor(osChange?: ChangeServerOsWithoutCloudInitOption) { 
        this['os-change'] = osChange;
    }
    public withOsChange(osChange: ChangeServerOsWithoutCloudInitOption): ChangeServerOsWithoutCloudInitRequestBody {
        this['os-change'] = osChange;
        return this;
    }
    public set osChange(osChange: ChangeServerOsWithoutCloudInitOption  | undefined) {
        this['os-change'] = osChange;
    }
    public get osChange(): ChangeServerOsWithoutCloudInitOption | undefined {
        return this['os-change'];
    }
}