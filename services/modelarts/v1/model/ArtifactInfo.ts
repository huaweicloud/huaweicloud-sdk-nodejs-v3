import { ContinueTrainTask } from './ContinueTrainTask';


export class ArtifactInfo {
    private 'artifact_type'?: string;
    private 'is_best'?: boolean;
    private 'artifact_id'?: string;
    private 'continue_train_nums'?: number;
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    public status?: string;
    public epoch?: number;
    public steps?: number;
    public loss?: number;
    private 'create_time'?: string;
    private 'publish_error_msg'?: string;
    private 'task_infos'?: Array<ContinueTrainTask>;
    public constructor() { 
    }
    public withArtifactType(artifactType: string): ArtifactInfo {
        this['artifact_type'] = artifactType;
        return this;
    }
    public set artifactType(artifactType: string  | undefined) {
        this['artifact_type'] = artifactType;
    }
    public get artifactType(): string | undefined {
        return this['artifact_type'];
    }
    public withIsBest(isBest: boolean): ArtifactInfo {
        this['is_best'] = isBest;
        return this;
    }
    public set isBest(isBest: boolean  | undefined) {
        this['is_best'] = isBest;
    }
    public get isBest(): boolean | undefined {
        return this['is_best'];
    }
    public withArtifactId(artifactId: string): ArtifactInfo {
        this['artifact_id'] = artifactId;
        return this;
    }
    public set artifactId(artifactId: string  | undefined) {
        this['artifact_id'] = artifactId;
    }
    public get artifactId(): string | undefined {
        return this['artifact_id'];
    }
    public withContinueTrainNums(continueTrainNums: number): ArtifactInfo {
        this['continue_train_nums'] = continueTrainNums;
        return this;
    }
    public set continueTrainNums(continueTrainNums: number  | undefined) {
        this['continue_train_nums'] = continueTrainNums;
    }
    public get continueTrainNums(): number | undefined {
        return this['continue_train_nums'];
    }
    public withAssetId(assetId: string): ArtifactInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): ArtifactInfo {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withStatus(status: string): ArtifactInfo {
        this['status'] = status;
        return this;
    }
    public withEpoch(epoch: number): ArtifactInfo {
        this['epoch'] = epoch;
        return this;
    }
    public withSteps(steps: number): ArtifactInfo {
        this['steps'] = steps;
        return this;
    }
    public withLoss(loss: number): ArtifactInfo {
        this['loss'] = loss;
        return this;
    }
    public withCreateTime(createTime: string): ArtifactInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withPublishErrorMsg(publishErrorMsg: string): ArtifactInfo {
        this['publish_error_msg'] = publishErrorMsg;
        return this;
    }
    public set publishErrorMsg(publishErrorMsg: string  | undefined) {
        this['publish_error_msg'] = publishErrorMsg;
    }
    public get publishErrorMsg(): string | undefined {
        return this['publish_error_msg'];
    }
    public withTaskInfos(taskInfos: Array<ContinueTrainTask>): ArtifactInfo {
        this['task_infos'] = taskInfos;
        return this;
    }
    public set taskInfos(taskInfos: Array<ContinueTrainTask>  | undefined) {
        this['task_infos'] = taskInfos;
    }
    public get taskInfos(): Array<ContinueTrainTask> | undefined {
        return this['task_infos'];
    }
}