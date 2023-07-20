import { PaneSetting } from './PaneSetting';


export class MixInfoLayout {
    public panes?: Array<PaneSetting>;
    public constructor(panes?: Array<PaneSetting>) { 
        this['panes'] = panes;
    }
    public withPanes(panes: Array<PaneSetting>): MixInfoLayout {
        this['panes'] = panes;
        return this;
    }
}