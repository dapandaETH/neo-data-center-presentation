# Neo Data Center: BTC Mining to LLM Inference Infrastructure

## Project Overview
Planning infrastructure to run open-weight language models for customers, transitioning from/alongside BTC mining operations.

## Requirements Analysis

### Infrastructure Model
- **Hybrid Approach**: Mix of reusing GPUs and separate infrastructure for different workloads

### Target Scale
- **Medium Scale**: 10-100 GPUs for LLM inference operations

### Model Types Required
- Large models (70B+ parameters) - Llama 3 70B, Mixtral 8x7B
- Medium models (7B-13B parameters) - Llama 3 8B, Mistral 7B
- Multimodal models - Image generation (Stable Diffusion, FLUX), audio, etc.

### Current Hardware
- **GPU Mining Rig**: NVIDIA RTX 3090/4090, A6000, or similar GPUs

### Service Model
- **Managed API Service**: Hosted API endpoints with pay-per-token pricing (similar to OpenAI API)

### Technical Priorities
1. **Cost Optimization**: Minimize upfront and operational costs while maintaining quality
2. **Operational Simplicity**: Easy to scale, add new models, and manage operations
3. **Security & Compliance**: Enterprise-grade security, compliance, and data protection

## Architectural Approaches

### Approach 1: vLLM + Kubernetes with GPU Sharing ⭐ Recommended

**Architecture:**
- vLLM inference engine with PagedAttention for 2-4x throughput improvement
- Kubernetes orchestration with GPU sharing (NVIDIA MIG or time-slicing)
- API gateway (Kong/Gateway) for rate limiting, authentication, and routing
- Model registry for version management
- Prometheus + Grafana monitoring

**Trade-offs:**
✅ **Pros:**
- Industry-standard, highly scalable
- Excellent cost efficiency through GPU sharing
- Strong ecosystem and community support
- Good security features and compliance tools

❌ **Cons:**
- Steeper learning curve
- Requires Kubernetes expertise
- More infrastructure complexity

**Why Recommended:** Best balance of your priorities - proven technology at scale, cost-optimized through GPU sharing, and operational maturity.

---

### Approach 2: Ollama + Docker Swarm with Time-Sharing

**Architecture:**
- Ollama for simplified model management and serving
- Docker Swarm for easier orchestration
- Cron-based scheduling to switch GPUs between mining/inference
- Nginx reverse proxy for API
- Basic monitoring stack

**Trade-offs:**
✅ **Pros:**
- Simplest to operate
- Lowest overhead
- Easy to understand
- Fast to deploy

❌ **Cons:**
- Less efficient for large 70B+ models
- Limited auto-scaling capabilities
- Simpler scheduling logic
- Less mature for production workloads

**When to Choose:** If operational simplicity is absolutely critical and you're willing to trade some efficiency and scalability.

---

### Approach 3: TensorRT-LLM + Custom Orchestration

**Architecture:**
- TensorRT-LLM for maximum inference performance
- Custom Python-based orchestration
- Specialized GPU kernel optimization
- Custom load balancer and API layer
- Deep hardware integration

**Trade-offs:**
✅ **Pros:**
- Best possible performance
- Maximum control over infrastructure
- Can optimize for specific hardware configurations

❌ **Cons:**
- Most complex to build and maintain
- Highest development cost
- Requires deep ML engineering expertise

**When to Choose:** If performance is absolutely critical and you have ML engineering resources to dedicate.

## Recommendation

**Approach 1 (vLLM + Kubernetes)** is recommended because it provides:
- Best balance of cost efficiency (through GPU sharing)
- Operational maturity (Kubernetes ecosystem)
- Security features and compliance capabilities
- Proven technology at the target scale (10-100 GPUs)
- Strong community support and documentation

## Next Steps

1. Select architectural approach
2. Develop detailed implementation plan
3. Design infrastructure components
4. Plan pilot deployment
5. Define monitoring and observability strategy
6. Establish security and compliance frameworks