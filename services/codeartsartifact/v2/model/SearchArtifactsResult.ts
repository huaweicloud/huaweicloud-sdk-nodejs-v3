import { ArtifactSearchResult } from './ArtifactSearchResult';


export class SearchArtifactsResult {
    public artifacts?: Array<ArtifactSearchResult>;
    public constructor() { 
    }
    public withArtifacts(artifacts: Array<ArtifactSearchResult>): SearchArtifactsResult {
        this['artifacts'] = artifacts;
        return this;
    }
}