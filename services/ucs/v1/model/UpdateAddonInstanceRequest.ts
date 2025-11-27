import { AddonInstance } from './AddonInstance';


export class UpdateAddonInstanceRequest {
    public id?: string;
    public body?: AddonInstance;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateAddonInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AddonInstance): UpdateAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}