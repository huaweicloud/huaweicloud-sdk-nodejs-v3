

export class PaneSetting {
    private 'pane_id': string | undefined;
    public x: string;
    public y: string;
    public width: string;
    public height: string;
    public constructor(paneId?: any, x?: any, y?: any, width?: any, height?: any) { 
        this['pane_id'] = paneId;
        this['x'] = x;
        this['y'] = y;
        this['width'] = width;
        this['height'] = height;
    }
    public withPaneId(paneId: string): PaneSetting {
        this['pane_id'] = paneId;
        return this;
    }
    public set paneId(paneId: string | undefined) {
        this['pane_id'] = paneId;
    }
    public get paneId() {
        return this['pane_id'];
    }
    public withX(x: string): PaneSetting {
        this['x'] = x;
        return this;
    }
    public withY(y: string): PaneSetting {
        this['y'] = y;
        return this;
    }
    public withWidth(width: string): PaneSetting {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): PaneSetting {
        this['height'] = height;
        return this;
    }
}