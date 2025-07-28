// Application Data
const appData = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@company.com",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      "role": "Admin"
    },
    {
      "id": 2,
      "name": "Sarah Wilson",
      "email": "sarah.wilson@company.com",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b1c2?w=100&h=100&fit=crop&crop=face",
      "role": "Sales Manager"
    }
  ],
  "contacts": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@techcorp.com",
      "company": "TechCorp Inc.",
      "phone": "+1-555-0123",
      "status": "Active",
      "source": "Website",
      "value": 50000,
      "lastContact": "2024-01-15"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob@innovate.com",
      "company": "Innovate Solutions",
      "phone": "+1-555-0124",
      "status": "Lead",
      "source": "Referral",
      "value": 25000,
      "lastContact": "2024-01-10"
    },
    {
      "id": 3,
      "name": "Carol Martinez",
      "email": "carol@futuretech.com",
      "company": "Future Tech",
      "phone": "+1-555-0125",
      "status": "Qualified",
      "source": "Cold Call",
      "value": 75000,
      "lastContact": "2024-01-12"
    }
  ],
  "deals": [
    {
      "id": 1,
      "title": "Enterprise Software License",
      "contactId": 1,
      "value": 50000,
      "stage": "Proposal",
      "probability": 70,
      "closeDate": "2024-02-15",
      "description": "Annual enterprise software license for TechCorp Inc."
    },
    {
      "id": 2,
      "title": "Consulting Services",
      "contactId": 2,
      "value": 25000,
      "stage": "Negotiation",
      "probability": 80,
      "closeDate": "2024-01-30",
      "description": "6-month consulting engagement with Innovate Solutions"
    },
    {
      "id": 3,
      "title": "Custom Development",
      "contactId": 3,
      "value": 75000,
      "stage": "Qualified",
      "probability": 50,
      "closeDate": "2024-03-01",
      "description": "Custom software development project for Future Tech"
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "description": "Complete redesign of company website",
      "status": "In Progress",
      "progress": 65,
      "startDate": "2024-01-01",
      "endDate": "2024-02-28",
      "budget": 15000,
      "spent": 9750,
      "teamMembers": [1, 2],
      "contactId": 1
    },
    {
      "id": 2,
      "name": "Mobile App Development",
      "description": "iOS and Android mobile application",
      "status": "Planning",
      "progress": 20,
      "startDate": "2024-02-01",
      "endDate": "2024-05-31",
      "budget": 45000,
      "spent": 5000,
      "teamMembers": [1],
      "contactId": 2
    },
    {
      "id": 3,
      "name": "Database Migration",
      "description": "Migrate legacy database to cloud",
      "status": "Completed",
      "progress": 100,
      "startDate": "2023-11-01",
      "endDate": "2023-12-31",
      "budget": 20000,
      "spent": 18500,
      "teamMembers": [2],
      "contactId": 3
    }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "Update homepage design",
      "description": "Create new homepage layout mockups",
      "projectId": 1,
      "assignedTo": 1,
      "status": "In Progress",
      "priority": "High",
      "dueDate": "2024-01-20",
      "completed": false
    },
    {
      "id": 2,
      "title": "Review mobile wireframes",
      "description": "Review and approve mobile app wireframes",
      "projectId": 2,
      "assignedTo": 2,
      "status": "Todo",
      "priority": "Medium",
      "dueDate": "2024-01-25",
      "completed": false
    },
    {
      "id": 3,
      "title": "Database cleanup",
      "description": "Remove obsolete records from database",
      "projectId": 3,
      "assignedTo": 2,
      "status": "Completed",
      "priority": "Low",
      "dueDate": "2023-12-20",
      "completed": true
    }
  ],
  "transactions": [
    {
      "id": 1,
      "date": "2024-01-15",
      "description": "Website Redesign Payment",
      "amount": 7500,
      "type": "income",
      "category": "Project Revenue",
      "projectId": 1,
      "contactId": 1
    },
    {
      "id": 2,
      "date": "2024-01-10",
      "description": "Office Supplies",
      "amount": -350,
      "type": "expense",
      "category": "Office Expenses",
      "projectId": null,
      "contactId": null
    },
    {
      "id": 3,
      "date": "2024-01-08",
      "description": "Software Licenses",
      "amount": -1200,
      "type": "expense",
      "category": "Technology",
      "projectId": null,
      "contactId": null
    },
    {
      "id": 4,
      "date": "2024-01-05",
      "description": "Mobile App Deposit",
      "amount": 5000,
      "type": "income",
      "category": "Project Revenue",
      "projectId": 2,
      "contactId": 2
    }
  ],
  "invoices": [
    {
      "id": 1,
      "number": "INV-2024-001",
      "contactId": 1,
      "projectId": 1,
      "amount": 7500,
      "status": "Paid",
      "issueDate": "2024-01-01",
      "dueDate": "2024-01-31",
      "paidDate": "2024-01-15",
      "items": [
        {
          "description": "Website Design Phase 1",
          "quantity": 1,
          "rate": 7500,
          "amount": 7500
        }
      ]
    },
    {
      "id": 2,
      "number": "INV-2024-002",
      "contactId": 2,
      "projectId": 2,
      "amount": 5000,
      "status": "Paid",
      "issueDate": "2024-01-15",
      "dueDate": "2024-02-14",
      "paidDate": "2024-01-05",
      "items": [
        {
          "description": "Mobile App Development Deposit",
          "quantity": 1,
          "rate": 5000,
          "amount": 5000
        }
      ]
    },
    {
      "id": 3,
      "number": "INV-2024-003",
      "contactId": 1,
      "projectId": 1,
      "amount": 7500,
      "status": "Pending",
      "issueDate": "2024-01-20",
      "dueDate": "2024-02-19",
      "paidDate": null,
      "items": [
        {
          "description": "Website Design Phase 2",
          "quantity": 1,
          "rate": 7500,
          "amount": 7500
        }
      ]
    }
  ],
  "messages": [
    {
      "id": 1,
      "userId": 2,
      "channel": "general",
      "message": "Welcome to the team chat! 👋",
      "timestamp": "2024-01-20T09:00:00Z",
      "type": "general"
    },
    {
      "id": 2,
      "userId": 1,
      "channel": "projects",
      "message": "Website redesign project is progressing well. Phase 1 completed!",
      "timestamp": "2024-01-20T10:30:00Z",
      "type": "project",
      "relatedId": 1
    },
    {
      "id": 3,
      "userId": 2,
      "channel": "deals",
      "message": "New deal alert: Enterprise Software License moved to Proposal stage",
      "timestamp": "2024-01-20T11:15:00Z",
      "type": "deal",
      "relatedId": 1
    }
  ],
  "moduleSettings": {
    "crm": {
      "enabled": true,
      "price": 10
    },
    "bookkeeping": {
      "enabled": true,
      "price": 10
    },
    "projects": {
      "enabled": true,
      "price": 10
    },
    "messaging": {
      "enabled": true,
      "price": 0
    }
  }
};

// Application State
let currentUser = null;
let currentPage = 'dashboard';
let currentChannel = 'general';
let moduleSettings = { ...appData.moduleSettings };

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    console.log('Initializing app...');
    
    // Show login page initially
    showLoginPage();
    
    // Setup login functionality
    setupLogin();
    
    // Setup all other event listeners
    setupEventListeners();
    
    console.log('App initialization complete');
}

function setupLogin() {
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    
    if (googleLoginBtn) {
        // Remove any existing listeners
        googleLoginBtn.replaceWith(googleLoginBtn.cloneNode(true));
        const newLoginBtn = document.getElementById('googleLoginBtn');
        
        newLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Google login clicked');
            handleGoogleLogin();
        });
        
        console.log('Login button event listener attached');
    } else {
        console.error('Google login button not found');
    }
}

function showLoginPage() {
    const loginPage = document.getElementById('loginPage');
    const app = document.getElementById('app');
    
    if (loginPage && app) {
        loginPage.classList.remove('hidden');
        app.classList.add('hidden');
        console.log('Login page displayed');
    }
}

function handleGoogleLogin() {
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    
    console.log('Starting Google login process...');
    
    // Show loading state
    if (googleLoginBtn) {
        googleLoginBtn.innerHTML = '<span>⏳</span> Signing in...';
        googleLoginBtn.disabled = true;
    }
    
    // Simulate login delay
    setTimeout(() => {
        console.log('Login simulation complete');
        currentUser = appData.users[0];
        showMainApp();
    }, 800);
}

function showMainApp() {
    const loginPage = document.getElementById('loginPage');
    const app = document.getElementById('app');
    
    console.log('Showing main app...');
    
    if (loginPage && app) {
        loginPage.classList.add('hidden');
        app.classList.remove('hidden');
    }
    
    // Set user info
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    
    if (userAvatar && userName && currentUser) {
        userAvatar.src = currentUser.avatar;
        userName.textContent = currentUser.name;
    }
    
    // Initialize app components
    initializeModules();
    updateNavigation();
    renderCurrentPage();
    setupMessagingEvents();
    
    console.log('Main app ready');
}

function setupEventListeners() {
    // Navigation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-btn')) {
            e.preventDefault();
            const page = e.target.dataset.page;
            const module = e.target.dataset.module;
            
            console.log(`Navigation clicked: ${page}, module: ${module}`);
            
            if (module && !moduleSettings[module].enabled) {
                console.log(`Module ${module} is disabled`);
                return;
            }
            
            navigateToPage(page);
        }
    });
    
    // Module toggles
    document.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox' && e.target.id.includes('Toggle')) {
            handleModuleToggle(e);
        }
    });
    
    // Sidebar toggle
    document.addEventListener('click', function(e) {
        if (e.target.id === 'sidebarToggle') {
            toggleSidebar();
        }
    });
    
    console.log('Event listeners setup complete');
}

function handleModuleToggle(e) {
    const toggleId = e.target.id;
    const isEnabled = e.target.checked;
    
    let module;
    if (toggleId.includes('crm')) module = 'crm';
    else if (toggleId.includes('bookkeeping')) module = 'bookkeeping';
    else if (toggleId.includes('projects')) module = 'projects';  
    else if (toggleId.includes('messaging')) module = 'messaging';
    
    if (!module) return;
    
    console.log(`Toggling ${module}: ${isEnabled}`);
    
    moduleSettings[module].enabled = isEnabled;
    
    // Sync all toggles for this module
    document.querySelectorAll(`input[id*="${module}"]`).forEach(toggle => {
        toggle.checked = isEnabled;
    });
    
    updateModuleCards();
    updateNavigation();
    updateSubscription();
    
    // Handle messaging sidebar
    if (module === 'messaging') {
        const messagingSidebar = document.getElementById('messagingSidebar');
        const app = document.getElementById('app');
        
        if (messagingSidebar && app) {
            if (isEnabled) {
                messagingSidebar.classList.remove('hidden');
                app.classList.remove('sidebar-collapsed');
            } else {
                messagingSidebar.classList.add('hidden');
                app.classList.add('sidebar-collapsed');
            }
        }
    }
    
    // Add system message
    if (moduleSettings.messaging.enabled) {
        addSystemMessage(`${module.toUpperCase()} module ${isEnabled ? 'enabled' : 'disabled'}`);
    }
}

function updateModuleCards() {
    document.querySelectorAll('.module-card').forEach(card => {
        const module = card.dataset.module;
        if (module && !moduleSettings[module].enabled) {
            card.classList.add('disabled');
        } else {
            card.classList.remove('disabled');
        }
    });
}

function updateNavigation() {
    document.querySelectorAll('.nav-btn[data-module]').forEach(btn => {
        const module = btn.dataset.module;
        if (module && !moduleSettings[module].enabled) {
            btn.disabled = true;
            btn.classList.add('disabled');
        } else {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    });
}

function updateSubscription() {
    const activeModules = [];
    let totalCost = 0;
    
    Object.entries(moduleSettings).forEach(([module, settings]) => {
        if (settings.enabled && settings.price > 0) {
            activeModules.push(module.toUpperCase());
            totalCost += settings.price;
        }
    });
    
    const activeModulesList = document.getElementById('activeModulesList');
    const totalCostElement = document.getElementById('totalCost');
    
    if (activeModulesList) {
        activeModulesList.textContent = activeModules.length > 0 
            ? `Active modules: ${activeModules.join(', ')}` 
            : 'No paid modules active';
    }
    
    if (totalCostElement) {
        totalCostElement.textContent = `$${totalCost}`;
    }
}

function navigateToPage(page) {
    console.log(`Navigating to: ${page}`);
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-page="${page}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Show page
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    currentPage = page;
    renderCurrentPage();
}

function renderCurrentPage() {
    switch(currentPage) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'crm':
            renderCRM();
            break;
        case 'bookkeeping':
            renderBookkeeping();
            break;
        case 'projects':
            renderProjects();
            break;
        case 'settings':
            renderSettings();
            break;
    }
}

function renderDashboard() {
    console.log('Rendering dashboard');
    
    updateSubscription();
    updateModuleCards();
    
    // Update metrics
    const activeDeals = appData.deals.filter(deal => deal.stage !== 'Closed').length;
    const totalDealValue = appData.deals.reduce((sum, deal) => sum + deal.value, 0);
    const monthlyRevenue = appData.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    const activeProjects = appData.projects.filter(p => p.status === 'In Progress').length;
    const todayMessages = appData.messages.length;
    
    safeUpdateElement('.crm-metric .metric-value', activeDeals);
    safeUpdateElement('.crm-metric .metric-label', `$${totalDealValue.toLocaleString()} Total`);
    safeUpdateElement('.bookkeeping-metric .metric-value', `$${monthlyRevenue.toLocaleString()}`);
    safeUpdateElement('.projects-metric .metric-value', activeProjects);
    safeUpdateElement('.messaging-metric .metric-value', todayMessages);
}

function renderCRM() {
    if (!moduleSettings.crm.enabled) return;
    
    console.log('Rendering CRM');
    renderPipeline();
    renderContacts();
}

function renderPipeline() {
    const stages = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed'];
    
    stages.forEach(stage => {
        const stageElement = document.querySelector(`[data-stage="${stage}"]`);
        if (!stageElement) return;
        
        const stageDeals = appData.deals.filter(deal => deal.stage === stage);
        
        stageElement.innerHTML = stageDeals.map(deal => {
            const contact = appData.contacts.find(c => c.id === deal.contactId);
            return `
                <div class="deal-card">
                    <h5>${deal.title}</h5>
                    <div class="deal-value">$${deal.value.toLocaleString()}</div>
                    <div class="deal-contact">${contact ? contact.name : 'Unknown'}</div>
                </div>
            `;
        }).join('');
    });
}

function renderContacts() {
    const contactsList = document.querySelector('.contacts-list');
    if (!contactsList) return;
    
    contactsList.innerHTML = appData.contacts.map(contact => `
        <div class="contact-card">
            <div class="contact-info">
                <h4>${contact.name}</h4>
                <div class="contact-details">
                    ${contact.company} • ${contact.email} • ${contact.phone}
                </div>
            </div>
            <div class="contact-status status status--${contact.status.toLowerCase()}">
                ${contact.status}
            </div>
        </div>
    `).join('');
}

function renderBookkeeping() {
    if (!moduleSettings.bookkeeping.enabled) return;
    
    console.log('Rendering Bookkeeping');
    updateFinancialSummary();
    renderTransactions();
    renderInvoices();
}

function updateFinancialSummary() {
    const income = appData.transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expenses = Math.abs(appData.transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0));
    const profit = income - expenses;
    
    safeUpdateElement('.summary-card.income .amount', `$${income.toLocaleString()}`);
    safeUpdateElement('.summary-card.expenses .amount', `$${expenses.toLocaleString()}`);  
    safeUpdateElement('.summary-card.profit .amount', `$${profit.toLocaleString()}`);
}

function renderTransactions() {
    const transactionsList = document.querySelector('.transactions-list');
    if (!transactionsList) return;
    
    transactionsList.innerHTML = appData.transactions.map(transaction => {
        const project = transaction.projectId ? appData.projects.find(p => p.id === transaction.projectId) : null;
        const contact = transaction.contactId ? appData.contacts.find(c => c.id === transaction.contactId) : null;
        
        return `
            <div class="transaction-item">
                <div class="transaction-info">
                    <h4>${transaction.description}</h4>
                    <div class="transaction-date">${new Date(transaction.date).toLocaleDateString()}</div>
                    ${project ? `<div class="transaction-project">Project: ${project.name}</div>` : ''}
                    ${contact ? `<div class="transaction-contact">Contact: ${contact.name}</div>` : ''}
                </div>
                <div class="transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}">
                    ${transaction.amount > 0 ? '+' : ''}$${Math.abs(transaction.amount).toLocaleString()}
                </div>
            </div>
        `;
    }).join('');
}

function renderInvoices() {
    const invoicesList = document.querySelector('.invoices-list');
    if (!invoicesList) return;
    
    invoicesList.innerHTML = appData.invoices.map(invoice => {
        const contact = appData.contacts.find(c => c.id === invoice.contactId);
        const project = invoice.projectId ? appData.projects.find(p => p.id === invoice.projectId) : null;
        
        return `
            <div class="invoice-item">
                <div class="invoice-info">
                    <h4>${invoice.number}</h4>
                    <div class="invoice-date">Due: ${new Date(invoice.dueDate).toLocaleDateString()}</div>
                    ${contact ? `<div class="invoice-contact">${contact.name}</div>` : ''}
                    ${project ? `<div class="invoice-project">${project.name}</div>` : ''}
                </div>
                <div class="invoice-status-amount">
                    <div class="status status--${invoice.status.toLowerCase()}">${invoice.status}</div>
                    <div class="invoice-amount">$${invoice.amount.toLocaleString()}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderProjects() {
    if (!moduleSettings.projects.enabled) return;
    
    console.log('Rendering Projects');
    renderProjectsGrid();
    renderTasks();
}

function renderProjectsGrid() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = appData.projects.map(project => {
        const contact = project.contactId ? appData.contacts.find(c => c.id === project.contactId) : null;
        
        return `
            <div class="project-card">
                <div class="project-header">
                    <h4>${project.name}</h4>
                    <div class="project-status">${project.status}</div>
                </div>
                <div class="project-description">${project.description}</div>
                <div class="project-progress">
                    <div class="progress-label">
                        <span>Progress</span>
                        <span>${project.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${project.progress}%"></div>
                    </div>
                </div>
                <div class="project-meta">
                    <div>Budget: $${project.budget.toLocaleString()}</div>
                    <div>Spent: $${project.spent.toLocaleString()}</div>
                    <div>Start: ${new Date(project.startDate).toLocaleDateString()}</div>
                    <div>End: ${new Date(project.endDate).toLocaleDateString()}</div>
                    ${contact ? `<div>Client: ${contact.name}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderTasks() {
    const tasksList = document.querySelector('.tasks-list');
    if (!tasksList) return;
    
    tasksList.innerHTML = appData.tasks.map(task => {
        const project = appData.projects.find(p => p.id === task.projectId);
        const assignee = appData.users.find(u => u.id === task.assignedTo);
        
        return `
            <div class="task-item">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <div class="task-content">
                    <h4 class="task-title">${task.title}</h4>
                    <div class="task-meta">
                        <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
                        <span>Due: ${new Date(task.dueDate).toLocaleDateString()}</span>
                        ${project ? `<span>Project: ${project.name}</span>` : ''}
                        ${assignee ? `<span>Assigned: ${assignee.name}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderSettings() {
    console.log('Rendering Settings');
    updateSubscription();
}

function initializeModules() {
    console.log('Initializing modules');
    
    // Set toggle states
    Object.entries(moduleSettings).forEach(([module, settings]) => {
        document.querySelectorAll(`input[id*="${module}"]`).forEach(toggle => {
            toggle.checked = settings.enabled;
        });
    });
    
    // Setup messaging sidebar
    const messagingSidebar = document.getElementById('messagingSidebar');
    const app = document.getElementById('app');
    
    if (messagingSidebar && app) {
        if (moduleSettings.messaging.enabled) {
            messagingSidebar.classList.remove('hidden');
            app.classList.remove('sidebar-collapsed');
            renderMessages();
        } else {
            messagingSidebar.classList.add('hidden');
            app.classList.add('sidebar-collapsed');
        }
    }
    
    updateModuleCards();
    updateNavigation();
}

function setupMessagingEvents() {
    // Channel switching
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('channel')) {
            document.querySelectorAll('.channel').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            currentChannel = e.target.dataset.channel;
            renderMessages();
        }
        
        // Send message button
        if (e.target.id === 'sendMessage') {
            sendMessage();
        }
    });
    
    // Enter key to send message
    document.addEventListener('keypress', function(e) {
        if (e.target.id === 'messageInput' && e.key === 'Enter') {
            sendMessage();
        }
    });
}

function renderMessages() {
    if (!moduleSettings.messaging.enabled) return;
    
    const messagesList = document.getElementById('messagesList');
    if (!messagesList) return;
    
    const channelMessages = appData.messages.filter(msg => msg.channel === currentChannel);
    
    messagesList.innerHTML = channelMessages.map(message => {
        const user = appData.users.find(u => u.id === message.userId);
        const time = new Date(message.timestamp).toLocaleTimeString();
        
        return `
            <div class="message">
                <div class="message-header">
                    <span class="message-author">${user ? user.name : 'System'}</span>
                    <span class="message-time">${time}</span>
                </div>
                <div class="message-content">${message.message}</div>
            </div>
        `;
    }).join('');
    
    messagesList.scrollTop = messagesList.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    if (!messageInput || !currentUser) return;
    
    const message = messageInput.value.trim();
    if (!message) return;
    
    const newMessage = {
        id: appData.messages.length + 1,
        userId: currentUser.id,
        channel: currentChannel,
        message: message,
        timestamp: new Date().toISOString(),
        type: 'user'
    };
    
    appData.messages.push(newMessage);
    messageInput.value = '';
    renderMessages();
}

function addSystemMessage(message) {
    const systemMessage = {
        id: appData.messages.length + 1,
        userId: 0,
        channel: 'general',
        message: message,
        timestamp: new Date().toISOString(),
        type: 'system'
    };
    
    appData.messages.push(systemMessage);
    
    if (currentChannel === 'general') {
        renderMessages();
    }
}

function toggleSidebar() {
    const messagingSidebar = document.getElementById('messagingSidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (messagingSidebar && sidebarToggle) {
        messagingSidebar.classList.toggle('collapsed');
        sidebarToggle.textContent = messagingSidebar.classList.contains('collapsed') ? '→' : '←';
    }
}

function safeUpdateElement(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = content;
    }
}