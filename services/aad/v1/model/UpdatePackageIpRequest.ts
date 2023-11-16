import { UpdatePackageIpRequestBody } from './UpdatePackageIpRequestBody';


export class UpdatePackageIpRequest {
    private 'package_id'?: string;
    public body?: UpdatePackageIpRequestBody;
    public constructor(packageId?: string) { 
        this['package_id'] = packageId;
    }
    public withPackageId(packageId: string): UpdatePackageIpRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withBody(body: UpdatePackageIpRequestBody): UpdatePackageIpRequest {
        this['body'] = body;
        return this;
    }
}