

export class ServerOsRequest {
    private 'admin_pass'?: string;
    private 'key_pair_name'?: string;
    private 'image_id'?: string;
    private 'user_data'?: string;
    public constructor() { 
    }
    public withAdminPass(adminPass: string): ServerOsRequest {
        this['admin_pass'] = adminPass;
        return this;
    }
    public set adminPass(adminPass: string  | undefined) {
        this['admin_pass'] = adminPass;
    }
    public get adminPass(): string | undefined {
        return this['admin_pass'];
    }
    public withKeyPairName(keyPairName: string): ServerOsRequest {
        this['key_pair_name'] = keyPairName;
        return this;
    }
    public set keyPairName(keyPairName: string  | undefined) {
        this['key_pair_name'] = keyPairName;
    }
    public get keyPairName(): string | undefined {
        return this['key_pair_name'];
    }
    public withImageId(imageId: string): ServerOsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withUserData(userData: string): ServerOsRequest {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
}