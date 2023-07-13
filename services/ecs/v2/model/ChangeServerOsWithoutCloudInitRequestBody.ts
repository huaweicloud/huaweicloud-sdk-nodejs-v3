import { ChangeServerOsWithoutCloudInitOption } from './ChangeServerOsWithoutCloudInitOption';


export class ChangeServerOsWithoutCloudInitRequestBody {
    private 'os-change': ChangeServerOsWithoutCloudInitOption | undefined;
    public constructor(osChange?: any) { 
        this['os-change'] = osChange;
    }
    public withOsChange(osChange: ChangeServerOsWithoutCloudInitOption): ChangeServerOsWithoutCloudInitRequestBody {
        this['os-change'] = osChange;
        return this;
    }
    public set osChange(osChange: ChangeServerOsWithoutCloudInitOption | undefined) {
        this['os-change'] = osChange;
    }
    public get osChange() {
        return this['os-change'];
    }
}