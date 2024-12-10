
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainOverviewResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'namspace_num'?: number;
    private 'repo_num'?: number;
    private 'image_num'?: number;
    private 'store_space'?: number;
    private 'downflow_size'?: number;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowDomainOverviewResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowDomainOverviewResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withNamspaceNum(namspaceNum: number): ShowDomainOverviewResponse {
        this['namspace_num'] = namspaceNum;
        return this;
    }
    public set namspaceNum(namspaceNum: number  | undefined) {
        this['namspace_num'] = namspaceNum;
    }
    public get namspaceNum(): number | undefined {
        return this['namspace_num'];
    }
    public withRepoNum(repoNum: number): ShowDomainOverviewResponse {
        this['repo_num'] = repoNum;
        return this;
    }
    public set repoNum(repoNum: number  | undefined) {
        this['repo_num'] = repoNum;
    }
    public get repoNum(): number | undefined {
        return this['repo_num'];
    }
    public withImageNum(imageNum: number): ShowDomainOverviewResponse {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
    public withStoreSpace(storeSpace: number): ShowDomainOverviewResponse {
        this['store_space'] = storeSpace;
        return this;
    }
    public set storeSpace(storeSpace: number  | undefined) {
        this['store_space'] = storeSpace;
    }
    public get storeSpace(): number | undefined {
        return this['store_space'];
    }
    public withDownflowSize(downflowSize: number): ShowDomainOverviewResponse {
        this['downflow_size'] = downflowSize;
        return this;
    }
    public set downflowSize(downflowSize: number  | undefined) {
        this['downflow_size'] = downflowSize;
    }
    public get downflowSize(): number | undefined {
        return this['downflow_size'];
    }
}