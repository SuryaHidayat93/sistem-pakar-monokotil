// types/GraphData.ts
export interface GraphNode {
  id: string;
  ciri?: string;
  group: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
