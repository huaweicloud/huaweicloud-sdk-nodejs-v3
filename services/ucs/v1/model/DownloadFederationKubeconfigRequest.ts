import { DownloadFederationKubeconfigRequestBody } from './DownloadFederationKubeconfigRequestBody';


export class DownloadFederationKubeconfigRequest {
    public clustergroupid?: string;
    public body?: DownloadFederationKubeconfigRequestBody;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): DownloadFederationKubeconfigRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: DownloadFederationKubeconfigRequestBody): DownloadFederationKubeconfigRequest {
        this['body'] = body;
        return this;
    }
}