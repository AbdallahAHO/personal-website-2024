---
title: "Self-hosting your own server with Hetzner and Coolify"
description: "A comprehensive guide to setting up your own self-hosted server using Hetzner Cloud and Coolify."
date: "Apr 16 2024"
---

After years of using various cloud providers and PaaS solutions, I've finally settled on a setup that gives me the perfect balance of control, cost, and ease of use: Hetzner Cloud for infrastructure and Coolify for deployment and management.

### Why Self-Host?

While platforms like Vercel and Netlify are fantastic for many use cases, there are several compelling reasons to consider self-hosting:

1. **Cost-effectiveness**: For multiple projects, self-hosting can be significantly cheaper
2. **Control**: Full control over your infrastructure and data
3. **Privacy**: Your data stays on your servers
4. **Learning**: Great way to understand infrastructure and DevOps

### Why Hetzner?

[Hetzner](https://www.hetzner.com/) offers some of the most competitive prices in the market while maintaining excellent quality:

- Servers starting at €4.15/month
- Locations in Germany, Finland, and the USA
- Great network performance
- Simple but powerful API
- Excellent documentation

I'm currently using their CPX21 instance (4 vCPU, 8GB RAM) which costs around €10.84/month and handles multiple projects with ease.

### Enter Coolify

[Coolify](https://coolify.io/) is an open-source, self-hosted Heroku/Netlify alternative that makes deploying and managing applications a breeze. It supports:

- One-click deployments
- Automatic SSL certificates
- Docker container management
- Database management
- Service monitoring
- And much more!

### Setting Up Your Server

Here's a step-by-step guide to getting started:

1. **Create a Hetzner Account**
   - Sign up at [hetzner.com](https://www.hetzner.com/)
   - Add a payment method
   - Create a new project

2. **Create a Server**
   - Choose a location (I recommend Germany for EU users)
   - Select an instance type (CPX21 is a good starting point)
   - Choose Ubuntu as your OS
   - Add your SSH key
   - Create the server

3. **Initial Server Setup**
   ```bash
   # Update system packages
   apt update && apt upgrade -y

   # Install basic utilities
   apt install -y curl wget git ufw

   # Configure firewall
   ufw allow 22
   ufw allow 80
   ufw allow 443
   ufw enable
   ```

4. **Install Coolify**
   ```bash
   # Run the installation script
   wget -q https://get.coolify.io -O install.sh
   sudo bash ./install.sh

   # Follow the prompts and save your credentials
   ```

5. **Configure Domain**
   - Point your domain to your server's IP
   - Add A records for wildcard subdomains
   ```
   A     @     YOUR_SERVER_IP
   A     *     YOUR_SERVER_IP
   ```

### Deploying Your First App

Once Coolify is set up, deploying applications is straightforward:

1. Connect your Git repository
2. Choose your deployment settings
3. Add any environment variables
4. Click deploy!

### Monitoring and Maintenance

Coolify provides built-in monitoring, but here are some additional tips:

1. **Regular Backups**
   ```bash
   # Create a backup script
   mkdir -p /root/backups
   coolify backup create --destination /root/backups
   ```

2. **Update Regularly**
   ```bash
   # Update Coolify
   coolify update
   
   # Update system packages
   apt update && apt upgrade -y
   ```

3. **Monitor Resources**
   - Use Coolify's built-in monitoring
   - Consider adding Netdata for more detailed metrics
   - Set up email alerts for critical events

### Cost Breakdown

Here's what I'm paying monthly:

- Hetzner CPX21: €10.84
- Domain: ~€1
- Total: ~€12/month

This setup hosts:
- Multiple Node.js applications
- Several static sites
- PostgreSQL databases
- Redis instances
- Monitoring tools

### Security Considerations

1. **Always use SSH keys** - disable password authentication
2. **Keep everything updated** - both the OS and Coolify
3. **Use strong passwords** for Coolify admin
4. **Enable automatic backups**
5. **Regularly check logs** for suspicious activity

### Conclusion

Self-hosting with Hetzner and Coolify has been a game-changer for my projects. It provides the perfect balance of control and convenience, all while keeping costs low. The initial setup might take a bit of time, but the long-term benefits are worth it.

Remember, while this setup works great for many use cases, it might not be suitable for everyone. Consider your specific needs, technical expertise, and maintenance capacity before making the switch.

Feel free to reach out if you have questions about this setup!