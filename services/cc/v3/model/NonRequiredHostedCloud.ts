import { HostedCloudEnum } from './HostedCloudEnum';


export class NonRequiredHostedCloud {
    private 'hosted_cloud'?: HostedCloudEnum;
    public constructor() { 
    }
    public withHostedCloud(hostedCloud: HostedCloudEnum): NonRequiredHostedCloud {
        this['hosted_cloud'] = hostedCloud;
        return this;
    }
    public set hostedCloud(hostedCloud: HostedCloudEnum  | undefined) {
        this['hosted_cloud'] = hostedCloud;
    }
    public get hostedCloud(): HostedCloudEnum | undefined {
        return this['hosted_cloud'];
    }
}