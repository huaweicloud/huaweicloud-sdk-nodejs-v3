import { DeployedResourceDetail } from './DeployedResourceDetail';


export class ResultDetail {
    private 'certificate_id'?: string;
    private 'total_num'?: number;
    private 'deployed_resources'?: Array<DeployedResourceDetail>;
    public constructor(certificateId?: string, totalNum?: number, deployedResources?: Array<DeployedResourceDetail>) { 
        this['certificate_id'] = certificateId;
        this['total_num'] = totalNum;
        this['deployed_resources'] = deployedResources;
    }
    public withCertificateId(certificateId: string): ResultDetail {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withTotalNum(totalNum: number): ResultDetail {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDeployedResources(deployedResources: Array<DeployedResourceDetail>): ResultDetail {
        this['deployed_resources'] = deployedResources;
        return this;
    }
    public set deployedResources(deployedResources: Array<DeployedResourceDetail>  | undefined) {
        this['deployed_resources'] = deployedResources;
    }
    public get deployedResources(): Array<DeployedResourceDetail> | undefined {
        return this['deployed_resources'];
    }
}