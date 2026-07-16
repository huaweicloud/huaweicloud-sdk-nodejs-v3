import { JupyterLab } from './JupyterLab';
import { MindStudioInsight } from './MindStudioInsight';
import { SSHResp } from './SSHResp';
import { Tensorboard } from './Tensorboard';


export class JobEndpointsResp {
    public ssh?: SSHResp;
    private 'jupyter_lab'?: JupyterLab;
    public tensorboard?: Tensorboard;
    private 'mindstudio_insight'?: MindStudioInsight;
    public constructor() { 
    }
    public withSsh(ssh: SSHResp): JobEndpointsResp {
        this['ssh'] = ssh;
        return this;
    }
    public withJupyterLab(jupyterLab: JupyterLab): JobEndpointsResp {
        this['jupyter_lab'] = jupyterLab;
        return this;
    }
    public set jupyterLab(jupyterLab: JupyterLab  | undefined) {
        this['jupyter_lab'] = jupyterLab;
    }
    public get jupyterLab(): JupyterLab | undefined {
        return this['jupyter_lab'];
    }
    public withTensorboard(tensorboard: Tensorboard): JobEndpointsResp {
        this['tensorboard'] = tensorboard;
        return this;
    }
    public withMindstudioInsight(mindstudioInsight: MindStudioInsight): JobEndpointsResp {
        this['mindstudio_insight'] = mindstudioInsight;
        return this;
    }
    public set mindstudioInsight(mindstudioInsight: MindStudioInsight  | undefined) {
        this['mindstudio_insight'] = mindstudioInsight;
    }
    public get mindstudioInsight(): MindStudioInsight | undefined {
        return this['mindstudio_insight'];
    }
}