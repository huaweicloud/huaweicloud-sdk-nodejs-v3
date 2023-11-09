import { SourceKind } from './SourceKind';
import { SourceOrArtifact } from './SourceOrArtifact';


export class SourceObject {
    public kind?: SourceKind;
    public spec?: SourceOrArtifact;
    public constructor(kind?: SourceKind, spec?: SourceOrArtifact) { 
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withKind(kind: SourceKind): SourceObject {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: SourceOrArtifact): SourceObject {
        this['spec'] = spec;
        return this;
    }
}