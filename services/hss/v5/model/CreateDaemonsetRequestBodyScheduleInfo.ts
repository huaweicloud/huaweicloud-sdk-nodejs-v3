

export class CreateDaemonsetRequestBodyScheduleInfo {
    private 'node_selector'?: Array<string>;
    private 'pod_tolerances'?: Array<string>;
    public constructor() { 
    }
    public withNodeSelector(nodeSelector: Array<string>): CreateDaemonsetRequestBodyScheduleInfo {
        this['node_selector'] = nodeSelector;
        return this;
    }
    public set nodeSelector(nodeSelector: Array<string>  | undefined) {
        this['node_selector'] = nodeSelector;
    }
    public get nodeSelector(): Array<string> | undefined {
        return this['node_selector'];
    }
    public withPodTolerances(podTolerances: Array<string>): CreateDaemonsetRequestBodyScheduleInfo {
        this['pod_tolerances'] = podTolerances;
        return this;
    }
    public set podTolerances(podTolerances: Array<string>  | undefined) {
        this['pod_tolerances'] = podTolerances;
    }
    public get podTolerances(): Array<string> | undefined {
        return this['pod_tolerances'];
    }
}