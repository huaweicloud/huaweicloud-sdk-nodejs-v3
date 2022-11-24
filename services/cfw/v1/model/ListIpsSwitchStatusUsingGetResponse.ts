
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsSwitchStatusUsingGetResponse extends SdkResponse {
    private 'object_id'?: string | undefined;
    private 'basic_defense_status'?: number | undefined;
    private 'virtual_patches_stauts'?: number | undefined;
    public constructor() { 
        super();
    }
    public withObjectId(objectId: string): ListIpsSwitchStatusUsingGetResponse {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withBasicDefenseStatus(basicDefenseStatus: number): ListIpsSwitchStatusUsingGetResponse {
        this['basic_defense_status'] = basicDefenseStatus;
        return this;
    }
    public set basicDefenseStatus(basicDefenseStatus: number | undefined) {
        this['basic_defense_status'] = basicDefenseStatus;
    }
    public get basicDefenseStatus() {
        return this['basic_defense_status'];
    }
    public withVirtualPatchesStauts(virtualPatchesStauts: number): ListIpsSwitchStatusUsingGetResponse {
        this['virtual_patches_stauts'] = virtualPatchesStauts;
        return this;
    }
    public set virtualPatchesStauts(virtualPatchesStauts: number | undefined) {
        this['virtual_patches_stauts'] = virtualPatchesStauts;
    }
    public get virtualPatchesStauts() {
        return this['virtual_patches_stauts'];
    }
}