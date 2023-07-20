import { CreateOtaPackage } from './CreateOtaPackage';


export class CreateOtaPackageRequest {
    private 'Instance-Id'?: string;
    public body?: CreateOtaPackage;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateOtaPackageRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateOtaPackage): CreateOtaPackageRequest {
        this['body'] = body;
        return this;
    }
}