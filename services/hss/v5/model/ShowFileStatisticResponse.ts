
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFileStatisticResponse extends SdkResponse {
    private 'host_num'?: number;
    private 'change_total_num'?: number;
    private 'change_file_num'?: number;
    private 'change_registry_num'?: number;
    private 'modify_num'?: number;
    private 'add_num'?: number;
    private 'delete_num'?: number;
    private 'trust_num'?: number;
    private 'untrust_num'?: number;
    private 'unknown_num'?: number;
    public constructor() { 
        super();
    }
    public withHostNum(hostNum: number): ShowFileStatisticResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withChangeTotalNum(changeTotalNum: number): ShowFileStatisticResponse {
        this['change_total_num'] = changeTotalNum;
        return this;
    }
    public set changeTotalNum(changeTotalNum: number  | undefined) {
        this['change_total_num'] = changeTotalNum;
    }
    public get changeTotalNum(): number | undefined {
        return this['change_total_num'];
    }
    public withChangeFileNum(changeFileNum: number): ShowFileStatisticResponse {
        this['change_file_num'] = changeFileNum;
        return this;
    }
    public set changeFileNum(changeFileNum: number  | undefined) {
        this['change_file_num'] = changeFileNum;
    }
    public get changeFileNum(): number | undefined {
        return this['change_file_num'];
    }
    public withChangeRegistryNum(changeRegistryNum: number): ShowFileStatisticResponse {
        this['change_registry_num'] = changeRegistryNum;
        return this;
    }
    public set changeRegistryNum(changeRegistryNum: number  | undefined) {
        this['change_registry_num'] = changeRegistryNum;
    }
    public get changeRegistryNum(): number | undefined {
        return this['change_registry_num'];
    }
    public withModifyNum(modifyNum: number): ShowFileStatisticResponse {
        this['modify_num'] = modifyNum;
        return this;
    }
    public set modifyNum(modifyNum: number  | undefined) {
        this['modify_num'] = modifyNum;
    }
    public get modifyNum(): number | undefined {
        return this['modify_num'];
    }
    public withAddNum(addNum: number): ShowFileStatisticResponse {
        this['add_num'] = addNum;
        return this;
    }
    public set addNum(addNum: number  | undefined) {
        this['add_num'] = addNum;
    }
    public get addNum(): number | undefined {
        return this['add_num'];
    }
    public withDeleteNum(deleteNum: number): ShowFileStatisticResponse {
        this['delete_num'] = deleteNum;
        return this;
    }
    public set deleteNum(deleteNum: number  | undefined) {
        this['delete_num'] = deleteNum;
    }
    public get deleteNum(): number | undefined {
        return this['delete_num'];
    }
    public withTrustNum(trustNum: number): ShowFileStatisticResponse {
        this['trust_num'] = trustNum;
        return this;
    }
    public set trustNum(trustNum: number  | undefined) {
        this['trust_num'] = trustNum;
    }
    public get trustNum(): number | undefined {
        return this['trust_num'];
    }
    public withUntrustNum(untrustNum: number): ShowFileStatisticResponse {
        this['untrust_num'] = untrustNum;
        return this;
    }
    public set untrustNum(untrustNum: number  | undefined) {
        this['untrust_num'] = untrustNum;
    }
    public get untrustNum(): number | undefined {
        return this['untrust_num'];
    }
    public withUnknownNum(unknownNum: number): ShowFileStatisticResponse {
        this['unknown_num'] = unknownNum;
        return this;
    }
    public set unknownNum(unknownNum: number  | undefined) {
        this['unknown_num'] = unknownNum;
    }
    public get unknownNum(): number | undefined {
        return this['unknown_num'];
    }
}