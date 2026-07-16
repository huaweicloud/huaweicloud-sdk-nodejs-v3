import { CloudServer } from './CloudServer';
import { Endpoints } from './Endpoints';
import { EndpointsRes } from './EndpointsRes';
import { ServerHpsInfo } from './ServerHpsInfo';
import { ServerImageResponse } from './ServerImageResponse';
import { ServerVolume } from './ServerVolume';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDevServerResponse extends SdkResponse {
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'charging_mode'?: DeleteDevServerResponseChargingModeEnum | string;
    private 'cloud_server'?: CloudServer;
    private 'endpoints_response'?: Array<Endpoints>;
    public flavor?: string;
    public id?: string;
    private 'key_pair_name'?: string;
    public name?: string;
    private 'order_id'?: string;
    public status?: DeleteDevServerResponseStatusEnum | string;
    private 'vpc_id'?: string;
    public endpoints?: Array<EndpointsRes>;
    public volumes?: Array<ServerVolume>;
    public image?: ServerImageResponse;
    public category?: DeleteDevServerResponseCategoryEnum | string;
    private 'server_hps'?: ServerHpsInfo;
    private 'subnet_id'?: string;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: number): DeleteDevServerResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): DeleteDevServerResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withChargingMode(chargingMode: DeleteDevServerResponseChargingModeEnum | string): DeleteDevServerResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: DeleteDevServerResponseChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): DeleteDevServerResponseChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withCloudServer(cloudServer: CloudServer): DeleteDevServerResponse {
        this['cloud_server'] = cloudServer;
        return this;
    }
    public set cloudServer(cloudServer: CloudServer  | undefined) {
        this['cloud_server'] = cloudServer;
    }
    public get cloudServer(): CloudServer | undefined {
        return this['cloud_server'];
    }
    public withEndpointsResponse(endpointsResponse: Array<Endpoints>): DeleteDevServerResponse {
        this['endpoints_response'] = endpointsResponse;
        return this;
    }
    public set endpointsResponse(endpointsResponse: Array<Endpoints>  | undefined) {
        this['endpoints_response'] = endpointsResponse;
    }
    public get endpointsResponse(): Array<Endpoints> | undefined {
        return this['endpoints_response'];
    }
    public withFlavor(flavor: string): DeleteDevServerResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withId(id: string): DeleteDevServerResponse {
        this['id'] = id;
        return this;
    }
    public withKeyPairName(keyPairName: string): DeleteDevServerResponse {
        this['key_pair_name'] = keyPairName;
        return this;
    }
    public set keyPairName(keyPairName: string  | undefined) {
        this['key_pair_name'] = keyPairName;
    }
    public get keyPairName(): string | undefined {
        return this['key_pair_name'];
    }
    public withName(name: string): DeleteDevServerResponse {
        this['name'] = name;
        return this;
    }
    public withOrderId(orderId: string): DeleteDevServerResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withStatus(status: DeleteDevServerResponseStatusEnum | string): DeleteDevServerResponse {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): DeleteDevServerResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEndpoints(endpoints: Array<EndpointsRes>): DeleteDevServerResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withVolumes(volumes: Array<ServerVolume>): DeleteDevServerResponse {
        this['volumes'] = volumes;
        return this;
    }
    public withImage(image: ServerImageResponse): DeleteDevServerResponse {
        this['image'] = image;
        return this;
    }
    public withCategory(category: DeleteDevServerResponseCategoryEnum | string): DeleteDevServerResponse {
        this['category'] = category;
        return this;
    }
    public withServerHps(serverHps: ServerHpsInfo): DeleteDevServerResponse {
        this['server_hps'] = serverHps;
        return this;
    }
    public set serverHps(serverHps: ServerHpsInfo  | undefined) {
        this['server_hps'] = serverHps;
    }
    public get serverHps(): ServerHpsInfo | undefined {
        return this['server_hps'];
    }
    public withSubnetId(subnetId: string): DeleteDevServerResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDevServerResponseChargingModeEnum {
    COMMON = 'COMMON',
    POST_PAID = 'POST_PAID',
    PRE_PAID = 'PRE_PAID'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteDevServerResponseStatusEnum {
    CREATE_FAILED = 'CREATE_FAILED',
    CREATING = 'CREATING',
    DELETED = 'DELETED',
    DELETE_FAILED = 'DELETE_FAILED',
    DELETING = 'DELETING',
    ERROR = 'ERROR',
    RUNNING = 'RUNNING',
    STARTING = 'STARTING',
    START_FAILED = 'START_FAILED',
    STOPPED = 'STOPPED',
    STOPPING = 'STOPPING',
    STOP_FAILED = 'STOP_FAILED',
    REBOOTING = 'REBOOTING',
    REBOOT_FAILED = 'REBOOT_FAILED',
    CHANGINGOS = 'CHANGINGOS',
    CHANGINGOS_FAILED = 'CHANGINGOS_FAILED',
    REINSTALLINGOS = 'REINSTALLINGOS',
    REINSTALLINGOS_FAILED = 'REINSTALLINGOS_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteDevServerResponseCategoryEnum {
    SPOD = 'SPOD',
    SERVER = 'SERVER',
    HPS = 'HPS'
}
