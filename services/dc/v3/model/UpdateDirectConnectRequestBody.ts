import { UpdateDirectConnect } from './UpdateDirectConnect';


export class UpdateDirectConnectRequestBody {
    private 'direct_connect'?: UpdateDirectConnect;
    public constructor() { 
    }
    public withDirectConnect(directConnect: UpdateDirectConnect): UpdateDirectConnectRequestBody {
        this['direct_connect'] = directConnect;
        return this;
    }
    public set directConnect(directConnect: UpdateDirectConnect  | undefined) {
        this['direct_connect'] = directConnect;
    }
    public get directConnect(): UpdateDirectConnect | undefined {
        return this['direct_connect'];
    }
}