

export class SearchKey {
    public appName?: string;
    public clusterId?: string;
    public hostIP?: string;
    public nameSpace?: string;
    public pathFile?: string;
    public podName?: string;
    public constructor(clusterId?: string) { 
        this['clusterId'] = clusterId;
    }
    public withAppName(appName: string): SearchKey {
        this['appName'] = appName;
        return this;
    }
    public withClusterId(clusterId: string): SearchKey {
        this['clusterId'] = clusterId;
        return this;
    }
    public withHostIP(hostIP: string): SearchKey {
        this['hostIP'] = hostIP;
        return this;
    }
    public withNameSpace(nameSpace: string): SearchKey {
        this['nameSpace'] = nameSpace;
        return this;
    }
    public withPathFile(pathFile: string): SearchKey {
        this['pathFile'] = pathFile;
        return this;
    }
    public withPodName(podName: string): SearchKey {
        this['podName'] = podName;
        return this;
    }
}