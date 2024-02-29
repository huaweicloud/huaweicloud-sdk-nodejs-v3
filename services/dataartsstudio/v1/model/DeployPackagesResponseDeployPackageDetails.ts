

export class DeployPackagesResponseDeployPackageDetails {
    private 'asy_subtask_num'?: number;
    private 'asy_task_id'?: string;
    private 'package_id'?: number;
    public constructor() { 
    }
    public withAsySubtaskNum(asySubtaskNum: number): DeployPackagesResponseDeployPackageDetails {
        this['asy_subtask_num'] = asySubtaskNum;
        return this;
    }
    public set asySubtaskNum(asySubtaskNum: number  | undefined) {
        this['asy_subtask_num'] = asySubtaskNum;
    }
    public get asySubtaskNum(): number | undefined {
        return this['asy_subtask_num'];
    }
    public withAsyTaskId(asyTaskId: string): DeployPackagesResponseDeployPackageDetails {
        this['asy_task_id'] = asyTaskId;
        return this;
    }
    public set asyTaskId(asyTaskId: string  | undefined) {
        this['asy_task_id'] = asyTaskId;
    }
    public get asyTaskId(): string | undefined {
        return this['asy_task_id'];
    }
    public withPackageId(packageId: number): DeployPackagesResponseDeployPackageDetails {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: number  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): number | undefined {
        return this['package_id'];
    }
}