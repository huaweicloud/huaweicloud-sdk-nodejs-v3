import { UpdatePackageNameRequestBody } from './UpdatePackageNameRequestBody';


export class UpdatePackageNameRequest {
    private 'package_id'?: string;
    public body?: UpdatePackageNameRequestBody;
    public constructor(packageId?: string) { 
        this['package_id'] = packageId;
    }
    public withPackageId(packageId: string): UpdatePackageNameRequest {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withBody(body: UpdatePackageNameRequestBody): UpdatePackageNameRequest {
        this['body'] = body;
        return this;
    }
}