import { BasePage } from './BasePage';
import { IngressPortInfo } from './IngressPortInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomIngressPortsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'ingress_port_infos'?: Array<IngressPortInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListCustomIngressPortsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListCustomIngressPortsResponse {
        this['total'] = total;
        return this;
    }
    public withIngressPortInfos(ingressPortInfos: Array<IngressPortInfo>): ListCustomIngressPortsResponse {
        this['ingress_port_infos'] = ingressPortInfos;
        return this;
    }
    public set ingressPortInfos(ingressPortInfos: Array<IngressPortInfo>  | undefined) {
        this['ingress_port_infos'] = ingressPortInfos;
    }
    public get ingressPortInfos(): Array<IngressPortInfo> | undefined {
        return this['ingress_port_infos'];
    }
}