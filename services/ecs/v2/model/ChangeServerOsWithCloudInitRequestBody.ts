import { ChangeServerOsWithCloudInitOption } from './ChangeServerOsWithCloudInitOption';


export class ChangeServerOsWithCloudInitRequestBody {
    private 'os-change': ChangeServerOsWithCloudInitOption | undefined;
    public constructor(osChange?: any) { 
        this['os-change'] = osChange;
    }
    public withOsChange(osChange: ChangeServerOsWithCloudInitOption): ChangeServerOsWithCloudInitRequestBody {
        this['os-change'] = osChange;
        return this;
    }
    public set osChange(osChange: ChangeServerOsWithCloudInitOption | undefined) {
        this['os-change'] = osChange;
    }
    public get osChange() {
        return this['os-change'];
    }
}