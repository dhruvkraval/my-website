const distSysResearch = [
  {
    title: 'MapReduce: Simplified Data Processing on Large Clusters',
    authors: 'Dean & Ghemawat',
    year: '2004',
    link: 'https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/',
    note: 'Introduced the MapReduce model for parallel processing of large datasets.',
  },
  {
    title: 'In Search of an Understandable Consensus Algorithm (Raft)',
    authors: 'Ongaro & Ousterhout',
    year: '2014',
    link: 'https://raft.github.io/raft.pdf',
    note: 'A simpler alternative to Paxos for achieving distributed consensus.',
  },
  {
    title: "Dynamo: Amazon's Highly Available Key-Value Store",
    authors: 'DeCandia et al.',
    year: '2007',
    link: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf',
    note: 'Pioneered eventual consistency and the CAP tradeoff in production systems.',
  },
  {
    title: "Spanner: Google's Globally Distributed Database",
    authors: 'Corbett et al.',
    year: '2012',
    link: 'https://research.google/pubs/spanner-googles-globally-distributed-database/',
    note: 'First system to provide external consistency at global scale using TrueTime.',
  },
  {
    title: 'Chord: A Scalable Peer-to-peer Lookup Service',
    authors: 'Stoica et al.',
    year: '2001',
    link: 'https://pdos.csail.mit.edu/papers/chord:sigcomm01/chord_sigcomm.pdf',
    note: 'Consistent hashing-based DHT that scales lookup to millions of nodes.',
  },
  {
    title: 'CORFU: A Shared Log Design for Flash Clusters',
    authors: 'Mahajan et al.',
    year: 'NSDI 2012',
    link: 'https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/balakrishnan',
    note: 'Shared log abstraction over flash clusters enabling strong consistency.',
  },
  {
    title: 'Scalog: Seamless Reconfiguration and Total Order in a Scalable Shared Log',
    authors: 'Ding et al.',
    year: 'NSDI 2020',
    link: 'https://www.usenix.org/conference/nsdi20/presentation/ding',
    note: 'Scalable shared log with seamless reconfiguration and global total order.',
  },
  {
    title: 'Tiga: Accelerating Geo-Distributed Transactions with Synchronized Clocks',
    authors: 'Geng et al.',
    year: 'SOSP 2025',
    link: 'https://dl.acm.org/doi/10.1145/3731569.3764854',
    note: 'Uses synchronized clocks to reduce coordination overhead in geo-distributed transactions.',
  },
  {
    title: 'HAWK: A Workload-driven Hierarchical Deadlock Detection Approach in Distributed Database Systems',
    authors: 'Zhang et al.',
    year: 'VLDB 2025',
    link: 'https://dl.acm.org/doi/10.14778/3748191.3748224',
    note: 'Hierarchical deadlock detection tuned to workload patterns in distributed databases.',
  },
  {
    title: 'Mako: Speculative Distributed Transactions with Geo-Replication',
    authors: 'Shen et al.',
    year: 'OSDI 2025',
    link: 'https://www.usenix.org/conference/osdi25/presentation/shen-weihai',
    note: 'Speculative execution to reduce latency in geo-replicated transaction processing.',
  },
  {
    title: 'Understanding Stragglers in Large Model Training Using What-if Analysis',
    authors: 'Lin et al.',
    year: 'OSDI 2025',
    link: 'https://www.usenix.org/conference/osdi25/presentation/lin-jinkun',
    note: 'Diagnoses straggler bottlenecks in distributed LLM training via counterfactual analysis.',
  },
  {
    title: 'WLB-LLM: Workload-Balanced 4D Parallelism for Large Language Model Training',
    authors: 'Wang et al.',
    year: 'OSDI 2025',
    link: 'https://www.usenix.org/conference/osdi25/presentation/wang-zheng',
    note: 'Balances workload across 4D parallelism dimensions to improve LLM training efficiency.',
  },
  {
    title: 'Minder: Faulty Machine Detection for Large-scale Distributed Model Training',
    authors: 'Deng et al.',
    year: 'NSDI 2025',
    link: 'https://www.usenix.org/conference/nsdi25/presentation/deng',
    note: 'Automatically detects faulty machines during large-scale model training jobs.',
  },
  {
    title: 'Sailor: Automating Distributed Training over Dynamic, Heterogeneous, and Geo-distributed Clusters',
    authors: 'Strati et al.',
    year: 'SOSP 2025',
    link: 'https://dl.acm.org/doi/10.1145/3731569.3764839',
    note: 'Automates distributed training across heterogeneous geo-distributed infrastructure.',
  },
  {
    title: 'COpter: Efficient Large-Scale Resource Allocation via Continual Optimization',
    authors: 'Subramanya et al.',
    year: 'SOSP 2025',
    link: 'https://dl.acm.org/doi/10.1145/3731569.3764846',
    note: 'Continual optimization approach for large-scale cluster resource allocation.',
  },
  {
    title: 'ALAP: Intent-Based Serverless Computing via Delayed Decision-Making',
    authors: 'Sinha et al.',
    year: 'SoCC 2025',
    link: 'https://dl.acm.org/doi/10.1145/3772052.3772262',
    note: 'Defers scheduling decisions to better match serverless workload intent.',
  },
  {
    title: 'Unlocking True Elasticity for the Cloud-Native Era with Dandelion',
    authors: 'Kuchler et al.',
    year: 'SOSP 2025',
    link: 'https://dl.acm.org/doi/10.1145/3731569.3764803',
    note: 'Enables fine-grained elasticity for cloud-native applications.',
  },
  {
    title: 'E3: Early Exiting with Explainable AI for Real-Time and Accurate DNN Inference in Edge-Cloud Systems',
    authors: 'Lin et al.',
    year: 'SenSys/IoTDI 2025',
    link: 'https://dl.acm.org/doi/10.1145/3715014.3722076',
    note: 'Early-exit DNN inference framework for latency-sensitive edge-cloud deployments.',
  },
  {
    title: 'Why Do Multi-Agent LLM Systems Fail?',
    authors: 'Cemri et al.',
    year: 'NeurIPS 2025',
    link: 'https://arxiv.org/abs/2503.13657',
    note: 'Taxonomy of failure modes in multi-agent LLM systems — informed a project I did for UIUC CS 525.',
  },
];

function PaperList({ papers }) {
  return (
    <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
      {papers.map((r, i) => (
        <li key={i} style={{ marginBottom: '4px', color: '#333' }}>
          {r.link ? (
            <a href={r.link} target="_blank" rel="noopener noreferrer">{r.title}</a>
          ) : (
            <span>{r.title}</span>
          )}
          {r.note && <span style={{ color: '#666' }}> — {r.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Research() {
  return (
    <>
      <p className="section-label">Distributed Systems</p>
      <p style={{ marginBottom: '16px', color: '#444' }}>
        My technical interests lie in Distributed Systems. My favorite classes across my college career were probably{' '}
        <a href="https://siebelschool.illinois.edu/academics/courses/cs425" target="_blank" rel="noopener noreferrer">CS 425</a> (Distributed Systems),{' '}
        <a href="https://siebelschool.illinois.edu/academics/courses/cs525" target="_blank" rel="noopener noreferrer">CS 525</a> (Advanced Distributed Systems), and{' '}
        <a href="https://siebelschool.illinois.edu/academics/courses/cs598rap" target="_blank" rel="noopener noreferrer">CS 598</a> (Data Storage Systems).{' '}
        CS 525 has a publicly available <a href="https://x.com/indygupta/status/2013311996960133413" target="_blank" rel="noopener noreferrer">reading list</a> every semester with a lot of great papers.
      </p>
      <PaperList papers={distSysResearch} />
    </>
  );
}
