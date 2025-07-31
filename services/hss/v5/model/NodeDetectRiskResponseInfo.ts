

export class NodeDetectRiskResponseInfo {
    private 'images_num'?: number;
    private 'baseline_risk_num'?: number;
    private 'vul_num'?: number;
    private 'event_num'?: number;
    private 'protect_node_num'?: number;
    private 'node_total_num'?: number;
    private 'cluster_id'?: string;
    private 'charging_mode'?: string;
    public constructor() { 
    }
    public withImagesNum(imagesNum: number): NodeDetectRiskResponseInfo {
        this['images_num'] = imagesNum;
        return this;
    }
    public set imagesNum(imagesNum: number  | undefined) {
        this['images_num'] = imagesNum;
    }
    public get imagesNum(): number | undefined {
        return this['images_num'];
    }
    public withBaselineRiskNum(baselineRiskNum: number): NodeDetectRiskResponseInfo {
        this['baseline_risk_num'] = baselineRiskNum;
        return this;
    }
    public set baselineRiskNum(baselineRiskNum: number  | undefined) {
        this['baseline_risk_num'] = baselineRiskNum;
    }
    public get baselineRiskNum(): number | undefined {
        return this['baseline_risk_num'];
    }
    public withVulNum(vulNum: number): NodeDetectRiskResponseInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withEventNum(eventNum: number): NodeDetectRiskResponseInfo {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
    public withProtectNodeNum(protectNodeNum: number): NodeDetectRiskResponseInfo {
        this['protect_node_num'] = protectNodeNum;
        return this;
    }
    public set protectNodeNum(protectNodeNum: number  | undefined) {
        this['protect_node_num'] = protectNodeNum;
    }
    public get protectNodeNum(): number | undefined {
        return this['protect_node_num'];
    }
    public withNodeTotalNum(nodeTotalNum: number): NodeDetectRiskResponseInfo {
        this['node_total_num'] = nodeTotalNum;
        return this;
    }
    public set nodeTotalNum(nodeTotalNum: number  | undefined) {
        this['node_total_num'] = nodeTotalNum;
    }
    public get nodeTotalNum(): number | undefined {
        return this['node_total_num'];
    }
    public withClusterId(clusterId: string): NodeDetectRiskResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withChargingMode(chargingMode: string): NodeDetectRiskResponseInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
}