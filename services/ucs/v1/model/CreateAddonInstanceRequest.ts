import { AddonInstance } from './AddonInstance';


export class CreateAddonInstanceRequest {
    public body?: AddonInstance;
    public constructor() { 
    }
    public withBody(body: AddonInstance): CreateAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}