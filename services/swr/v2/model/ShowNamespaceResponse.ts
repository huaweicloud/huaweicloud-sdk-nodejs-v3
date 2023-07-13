
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNamespaceResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    private 'creator_name'?: string | undefined;
    public auth?: ShowNamespaceResponseAuthEnum;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowNamespaceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowNamespaceResponse {
        this['name'] = name;
        return this;
    }
    public withCreatorName(creatorName: string): ShowNamespaceResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
        return this['creator_name'];
    }
    public withAuth(auth: ShowNamespaceResponseAuthEnum): ShowNamespaceResponse {
        this['auth'] = auth;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNamespaceResponseAuthEnum {
    NUMBER_7 = 7,
    NUMBER_3 = 3,
    NUMBER_1 = 1
}
