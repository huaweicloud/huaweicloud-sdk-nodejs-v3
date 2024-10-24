

export class HostedCloud {
    private 'hosted_cloud'?: HostedCloudHostedCloudEnum | string;
    public constructor(hostedCloud?: string) { 
        this['hosted_cloud'] = hostedCloud;
    }
    public withHostedCloud(hostedCloud: HostedCloudHostedCloudEnum | string): HostedCloud {
        this['hosted_cloud'] = hostedCloud;
        return this;
    }
    public set hostedCloud(hostedCloud: HostedCloudHostedCloudEnum | string  | undefined) {
        this['hosted_cloud'] = hostedCloud;
    }
    public get hostedCloud(): HostedCloudHostedCloudEnum | string | undefined {
        return this['hosted_cloud'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HostedCloudHostedCloudEnum {
    HWCLOUD = 'HWCloud',
    IRELAND = 'Ireland'
}
