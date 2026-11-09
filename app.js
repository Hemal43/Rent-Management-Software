// =========================================================
// ભાડા વ્યવસ્થાપક (Rent Manager) - External Script (app.js)
// =========================================================
// In-memory data store with localStorage backup
    const STORAGE_KEY = 'rent_manager_data_jagdishbhai_v3';

    // Default sample data in Gujarati with Owner Profile & Partner Registry (v5.0)
    const defaultData = {
      "properties": [
            {
                  "id": "prop-1794154551493",
                  "name": "B18, દિવ્ય શક્તિ સોસાયટી",
                  "type": "મકાન / ટેનામેન્ટ (House)",
                  "address": "B18, દિવ્ય શક્તિ સોસાયટી",
                  "isPartnership": false,
                  "p1Name": "જગદીશભાઈ દુધાત",
                  "p1Share": 100,
                  "p2Name": "",
                  "p2Share": 0
            },
            {
                  "id": "prop-1794154582424",
                  "name": "B19, દિવ્ય શક્તિ સોસાયટી, ગ્રાઉન્ડ ફ્લોર",
                  "type": "મકાન / ટેનામેન્ટ (House)",
                  "address": "B19, દિવ્ય શક્તિ સોસાયટી, ગ્રાઉન્ડ ફ્લોર",
                  "isPartnership": true,
                  "p1Name": "જગદીશભાઈ દુધાત",
                  "p1Share": 50,
                  "p2Name": "વિનુભાઈ દુધાત",
                  "p2Share": 50
            },
            {
                  "id": "prop-1794154743020",
                  "name": "B19, દિવ્ય શક્તિ સોસાયટી, પ્રથમ માળ",
                  "type": "મકાન / ટેનામેન્ટ (House)",
                  "address": "B19, દિવ્ય શક્તિ સોસાયટી, પ્રથમ માળ",
                  "isPartnership": true,
                  "p1Name": "જગદીશભાઈ દુધાત",
                  "p1Share": 50,
                  "p2Name": "વિનુભાઈ દુધાત",
                  "p2Share": 50
            },
            {
                  "id": "prop-1794154796711",
                  "name": "B19, દિવ્ય શક્તિ સોસાયટી, પતરાવલી રૂમ",
                  "type": "મકાન / ટેનામેન્ટ (House)",
                  "address": "B19, દિવ્ય શક્તિ સોસાયટી, પતરાવલી રૂમ",
                  "isPartnership": true,
                  "p1Name": "જગદીશભાઈ દુધાત",
                  "p1Share": 50,
                  "p2Name": "વિનુભાઈ દુધાત",
                  "p2Share": 50
            }
      ],
      "tenants": [
            {
                  "id": "ten-1794154916757",
                  "propertyId": "prop-1794154551493",
                  "name": "પરેશભાઈ રાખોલીયા",
                  "mobile": "9327424258",
                  "address": "સુરત",
                  "rent": 14000,
                  "deposit": 28000,
                  "startDate": "2026-07-15",
                  "idProof": "",
                  "photo": ""
            },
            {
                  "id": "ten-1794155166215",
                  "propertyId": "prop-1794154582424",
                  "name": "પાવસીયા તીર્થ",
                  "mobile": "9054096539",
                  "address": "સુરત",
                  "rent": 10000,
                  "deposit": 20000,
                  "startDate": "2026-11-15",
                  "idProof": "",
                  "photo": ""
            },
            {
                  "id": "ten-1794155388780",
                  "propertyId": "prop-1794154743020",
                  "name": "કનુભાઈ ગોસ્વામી",
                  "mobile": "9723265368",
                  "address": "સુરત",
                  "rent": 7000,
                  "deposit": 15000,
                  "startDate": "2026-08-01",
                  "idProof": "",
                  "photo": ""
            }
      ],
      "transactions": [
          {
          "id": "tx-1794193617001",
          "date": "2026-11-09",
          "month": "2026-11",
          "type": "expense",
          "propertyId": "prop-1794154582424",
          "tenantId": null,
          "category": "મેઇન્ટેનન્સ",
          "amount": 9660,
          "p1Share": 4830,
          "p2Share": 4830,
          "paymentMode": "UPI / GPay / Paytm",
          "remarks": ""
},
          
            {
                  "id": "tx-1794156792976",
                  "date": "2026-09-10",
                  "month": "2026-08",
                  "type": "income",
                  "propertyId": "prop-1794154582424",
                  "tenantId": "ten-1794155166215",
                  "category": "ભાડું",
                  "amount": 10000,
                  "p1Share": 5000,
                  "p2Share": 5000,
                  "paymentMode": "UPI / GPay / Paytm",
                  "remarks": ""
            },
            {
                  "id": "tx-1794156106101",
                  "date": "2026-11-08",
                  "month": "2026-08",
                  "type": "expense",
                  "propertyId": "prop-1794154551493",
                  "tenantId": null,
                  "category": "મેઇન્ટેનન્સ",
                  "amount": 5800,
                  "p1Share": 5800,
                  "p2Share": 0,
                  "paymentMode": "UPI / GPay / Paytm",
                  "remarks": ""
            },
            {
                  "id": "tx-1794155892259",
                  "date": "2026-11-05",
                  "month": "2026-10",
                  "type": "income",
                  "propertyId": "prop-1794154551493",
                  "tenantId": "ten-1794154916757",
                  "category": "ભાડું",
                  "amount": 14000,
                  "p1Share": 14000,
                  "p2Share": 0,
                  "paymentMode": "UPI / GPay / Paytm",
                  "remarks": ""
            },
            {
                  "id": "tx-1794155743740",
                  "date": "2026-10-07",
                  "month": "2026-09",
                  "type": "income",
                  "propertyId": "prop-1794154551493",
                  "tenantId": "ten-1794154916757",
                  "category": "ભાડું",
                  "amount": 14000,
                  "p1Share": 14000,
                  "p2Share": 0,
                  "paymentMode": "UPI / GPay / Paytm",
                  "remarks": ""
            },
            {
                  "id": "tx-1794155661516",
                  "date": "2026-09-18",
                  "month": "2026-08",
                  "type": "income",
                  "propertyId": "prop-1794154551493",
                  "tenantId": "ten-1794154916757",
                  "category": "ભાડું",
                  "amount": 14000,
                  "p1Share": 14000,
                  "p2Share": 0,
                  "paymentMode": "UPI / GPay / Paytm",
                  "remarks": ""
            },
            {
                  "id": "tx-1794155498734",
                  "date": "2026-08-05",
                  "month": "2026-07",
                  "type": "income",
                  "propertyId": "prop-1794154551493",
                  "tenantId": "ten-1794154916757",
                  "category": "ભાડું",
                  "amount": 7000,
                  "p1Share": 7000,
                  "p2Share": 0,
                  "paymentMode": "UPI / GPay / Paytm",
                  "remarks": "Online"
            }
      ],
      "settings": {
            "googleSheetUrl": ""
      },
      "partners": [
            {
                  "id": "part-1794153854523",
                  "name": "જગદીશભાઈ દુધાત",
                  "mobile": "9723339384"
            },
            {
                  "id": "part-1794153877531",
                  "name": "વિનુભાઈ દુધાત",
                  "mobile": "9979112763"
            }
      ],
      "owner": {
            "name": "જગદીશભાઈ દુધાત",
            "mobile": "9723339384"
      }
};

    let appData = { ...defaultData };
    let chartInstance = null;

    // Load from localStorage
    function loadData() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          appData = JSON.parse(stored);
        }
        // Auto-clean raw spreadsheet URL if user previously stored it as webhook
        if (appData && appData.settings && appData.settings.googleSheetUrl && appData.settings.googleSheetUrl.includes('docs.google.com/spreadsheets')) {
          appData.settings.googleSheetUrl = '';
          saveData();
        }
      } catch (e) {
        console.warn('localStorage read error:', e);
      }
    }

    // Save to localStorage
    function saveData() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
      } catch (e) {
        console.warn('localStorage save error:', e);
      }
    }

    // Helper: Toast notification
    function showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `px-4 py-3 rounded-xl shadow-lg text-xs font-bold text-white transition-all transform duration-300 pointer-events-auto flex items-center gap-2 ${
        type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'
      }`;
      toast.innerHTML = `<span>${type === 'success' ? '✓' : '⚠️'}</span><span>${message}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    // Navigation Tab Switching
    function switchTab(targetId) {
      document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
      const activeSec = document.getElementById(targetId);
      if (activeSec) activeSec.classList.remove('hidden');

      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-target') === targetId) {
          btn.classList.add('text-indigo-600');
          btn.classList.remove('text-slate-400');
        } else {
          btn.classList.remove('text-indigo-600');
          btn.classList.add('text-slate-400');
        }
      });

      // Special re-renders when switching tabs
      if (targetId === 'tab-dashboard') renderDashboard();
      if (targetId === 'tab-properties') renderProperties();
      if (targetId === 'tab-tenants') renderTenants();
      if (targetId === 'tab-partners') renderPartners();
      if (targetId === 'tab-reports') renderReports();
    }

    // Helper: Format Currency
    function fmt(num) {
      return '₹' + Number(num || 0).toLocaleString('en-IN');
    }

    // Get Current Local Month String (YYYY-MM)
    function getCurrentMonthStr() {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      return `${y}-${m}`;
    }

    // Auto-fill Entry Form on open
    function setupEntryFormDefaults() {
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10);
      const monthStr = getCurrentMonthStr();

      const dateInput = document.getElementById('entry-date');
      if (dateInput) dateInput.value = dateStr;

      const monthSelect = document.getElementById('entry-month');
      if (monthSelect) {
        // Ensure month option exists or add it
        let found = false;
        for (let opt of monthSelect.options) {
          if (opt.value === monthStr) {
            opt.selected = true;
            found = true;
            break;
          }
        }
        if (!found) {
          const opt = document.createElement('option');
          opt.value = monthStr;
          opt.textContent = `${monthStr}`;
          opt.selected = true;
          monthSelect.appendChild(opt);
        }
      }

      populatePropertyDropdowns();
      handlePropertyChangeInEntry();
      updateLiveSplitPreview();
    }

    // Populate property dropdowns
    function populatePropertyDropdowns() {
      const entryPropSelect = document.getElementById('entry-property');
      const tenantPropSelect = document.getElementById('tenant-property-id');

      const optionsHtml = appData.properties.map(p => 
        `<option value="${p.id}">${p.name}</option>`
      ).join('');

      if (entryPropSelect) entryPropSelect.innerHTML = optionsHtml;
      if (tenantPropSelect) tenantPropSelect.innerHTML = optionsHtml;
    }

    // Handle property selection change in Entry Form
    function handlePropertyChangeInEntry() {
      const propId = document.getElementById('entry-property').value;
      const prop = appData.properties.find(p => p.id === propId);
      const tenant = appData.tenants.find(t => t.propertyId === propId);
      const isIncome = document.getElementById('entry-type').value === 'income';

      const tenantBox = document.getElementById('entry-tenant-info-box');
      const tenantNameEl = document.getElementById('entry-tenant-name');
      const suggestedRentEl = document.getElementById('entry-suggested-rent');
      const amountInput = document.getElementById('entry-amount');

      if (isIncome && tenant) {
        tenantBox.classList.remove('hidden');
        tenantNameEl.textContent = tenant.name + ` (${tenant.mobile})`;
        suggestedRentEl.textContent = fmt(tenant.rent);
        // ALWAYS default to the tenant rent automatically (v5.0)
        amountInput.value = tenant.rent;
      } else if (isIncome && !tenant) {
        tenantBox.classList.remove('hidden');
        tenantNameEl.textContent = 'કોઈ સક્રિય ભાડુઆત નથી (ખાલી)';
        suggestedRentEl.textContent = 'ભાડું નિયત નથી';
        amountInput.value = '';
      } else {
        tenantBox.classList.add('hidden');
      }

      updateLiveSplitPreview();
    }

    // Update Live Partnership Split preview in Entry Form (ONLY for Partnership Properties)
    function updateLiveSplitPreview() {
      const propId = document.getElementById('entry-property').value;
      const amount = parseFloat(document.getElementById('entry-amount').value) || 0;
      const prop = appData.properties.find(p => p.id === propId) || appData.properties[0];
      const splitContainer = document.getElementById('entry-split-container');

      if (!prop || !prop.isPartnership) {
        // HIDE COMPLETELY for self-owned / non-partnership properties
        if (splitContainer) splitContainer.classList.add('hidden');
        return;
      }

      // SHOW ONLY for Partnership properties
      if (splitContainer) splitContainer.classList.remove('hidden');

      const p1Share = Math.round((amount * (prop.p1Share || 50)) / 100);
      const p2Share = amount - p1Share;

      document.getElementById('entry-split-ratio-tag').textContent = `${prop.p1Share}% / ${prop.p2Share}%`;
      document.getElementById('entry-p1-label').textContent = `${prop.p1Name || 'P1'} (${prop.p1Share}%):`;
      document.getElementById('entry-p2-label').textContent = `${prop.p2Name || 'P2'} (${prop.p2Share}%):`;
      document.getElementById('entry-p1-amount').textContent = fmt(p1Share);
      document.getElementById('entry-p2-amount').textContent = fmt(p2Share);
    }


    // Helper: Compute unified Owner & Partner net profit (100% Self-Owned + Partnership Share - v7.0)
    function computeDynamicPartnerProfits(filterFn) {
      const totals = {};
      const ownerName = (appData.owner && appData.owner.name) || 'જગદીશભાઈ દુધાત';
      totals[ownerName] = 0;

      // Ensure all registered partners are present in map
      if (Array.isArray(appData.partners)) {
        appData.partners.forEach(p => {
          if (totals[p.name] === undefined) totals[p.name] = 0;
        });
      }

      appData.transactions.forEach(t => {
        if (filterFn && !filterFn(t)) return;

        const prop = appData.properties.find(p => p.id === t.propertyId);
        if (!prop) return;

        // Case 1: 100% Self-Owned Property OR Partnership where both p1 and p2 are the same Owner
        if (!prop.isPartnership || (prop.p1Name === prop.p2Name)) {
          const targetOwner = (!prop.isPartnership ? ownerName : (prop.p1Name || ownerName));
          if (totals[targetOwner] === undefined) totals[targetOwner] = 0;
          if (t.type === 'income') {
            totals[targetOwner] += (t.amount || 0);
          } else {
            totals[targetOwner] -= (t.amount || 0);
          }
        } else {
          // Case 2: Partnership Property (e.g. 50% Owner + 50% Partner)
          const p1 = prop.p1Name || ownerName;
          const p2 = prop.p2Name || 'પાર્ટનર ૨';
          if (totals[p1] === undefined) totals[p1] = 0;
          if (totals[p2] === undefined) totals[p2] = 0;

          // Calculate share dynamically if needed or use recorded p1Share/p2Share
          const s1 = (t.p1Share !== undefined && t.p2Share !== undefined && (t.p1Share + t.p2Share === t.amount))
            ? t.p1Share
            : Math.round((t.amount * (prop.p1Share || 50)) / 100);
          const s2 = (t.p1Share !== undefined && t.p2Share !== undefined && (t.p1Share + t.p2Share === t.amount))
            ? t.p2Share
            : (t.amount - s1);

          if (t.type === 'income') {
            totals[p1] += s1;
            totals[p2] += s2;
          } else {
            totals[p1] -= s1;
            totals[p2] -= s2;
          }
        }
      });

      return totals;
    }

    // Helper: Get detailed breakdown for a specific person (100% Self-Owned vs Partnership Share - v7.0)
    function getPersonDetailedBreakdown(personName, filterFn) {
      const ownerName = (appData.owner && appData.owner.name) || 'જગદીશભાઈ દુધાત';
      let selfNet = 0;
      let partNet = 0;

      appData.transactions.forEach(t => {
        if (filterFn && !filterFn(t)) return;
        const prop = appData.properties.find(p => p.id === t.propertyId);
        if (!prop) return;

        const sign = t.type === 'income' ? 1 : -1;

        if (!prop.isPartnership || (prop.p1Name === prop.p2Name)) {
          const targetOwner = (!prop.isPartnership ? ownerName : (prop.p1Name || ownerName));
          if (targetOwner === personName) {
            selfNet += sign * (t.amount || 0);
          }
        } else {
          const s1 = (t.p1Share !== undefined && t.p2Share !== undefined && (t.p1Share + t.p2Share === t.amount))
            ? t.p1Share
            : Math.round((t.amount * (prop.p1Share || 50)) / 100);
          const s2 = (t.p1Share !== undefined && t.p2Share !== undefined && (t.p1Share + t.p2Share === t.amount))
            ? t.p2Share
            : (t.amount - s1);

          if (prop.p1Name === personName) partNet += sign * s1;
          if (prop.p2Name === personName) partNet += sign * s2;
        }
      });

      return {
        selfNet,
        partNet,
        totalNet: selfNet + partNet
      };
    }

    // RENDER: Partners Directory & Owner Profile (100% Self + 50% Partnership Combined - v7.0)
    function renderPartners() {
      if (!appData.owner) {
        appData.owner = { name: 'જગદીશભાઈ દુધાત', mobile: '9723339384' };
      }

      const ownerName = appData.owner.name;
      const curMonth = getCurrentMonthStr();

      // Get full breakdown for Owner (100% Self-Owned + Partnership Share)
      const ownerBreakdown = getPersonDetailedBreakdown(ownerName);

      // Find Owner's 100% Self-Owned properties AND Partnership properties
      const selfProps = appData.properties.filter(p => !p.isPartnership || (p.p1Name === p.p2Name && p.p1Name === ownerName));
      const partProps = appData.properties.filter(p => p.isPartnership && p.p1Name !== p.p2Name && (p.p1Name === ownerName || p.p2Name === ownerName));

      // Render Owner Card with 100% + Partnership Share + Grand Total
      const ownerBox = document.getElementById('owner-profile-container');
      if (ownerBox) {
        ownerBox.innerHTML = `
          <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-4 text-white shadow-lg border border-indigo-900/40 space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-2xl shadow-inner">
                  👑
                </div>
                <div>
                  <div class="flex items-center gap-1.5">
                    <h3 class="font-bold text-white text-base">${ownerName}</h3>
                    <span class="text-[10px] bg-amber-400/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-400/30">મુખ્ય માલિક (૧૦૦% + ભાગીદારી)</span>
                  </div>
                  <p class="text-xs text-indigo-200 mt-0.5">📞 ${appData.owner.mobile || 'મોબાઈલ નથી'}</p>
                </div>
              </div>
              <button onclick="openEditOwnerModal()" class="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-indigo-200 text-xs font-semibold rounded-lg transition border border-white/10">
                ✏️ એડિટ
              </button>
            </div>

            <!-- Grand Total Combined Earnings (100% + Partnership) -->
            <div class="bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-xl p-3 border border-amber-400/30 flex items-center justify-between">
              <div>
                <span class="text-[11px] text-amber-200 font-semibold block">કુલ સંયુક્ત કમાણી (૧૦૦% સ્વતંત્ર + ભાગીદારી ભાગ)</span>
                <span class="text-2xl font-extrabold text-amber-300">${fmt(ownerBreakdown.totalNet)}</span>
              </div>
              <span class="text-xs bg-emerald-500/30 text-emerald-200 px-2.5 py-1 rounded-lg border border-emerald-400/30 font-bold">
                કુલ નેટ નફો
              </span>
            </div>

            <!-- Split Breakdown: 100% Self-Owned vs Partnership Share -->
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <span class="text-[10px] text-indigo-200 block">👤 ૧૦૦% સ્વતંત્ર માલિકી નફો:</span>
                <span class="font-bold text-white text-sm mt-0.5 block">${fmt(ownerBreakdown.selfNet)}</span>
              </div>
              <div class="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <span class="text-[10px] text-indigo-200 block">🤝 ભાગીદારી (50%) નફો:</span>
                <span class="font-bold text-emerald-300 text-sm mt-0.5 block">${fmt(ownerBreakdown.partNet)}</span>
              </div>
            </div>

            <!-- Properties Chips -->
            <div class="text-xs space-y-1.5 pt-1 border-t border-white/10">
              <div>
                <span class="text-indigo-200 text-[10px] block mb-1">સ્વતંત્ર ૧૦૦% પ્રોપર્ટી (${selfProps.length}) & ભાગીદારી પ્રોપર્ટી (${partProps.length}):</span>
                <div class="flex flex-wrap gap-1.5">
                  ${selfProps.map(pr => `<span class="bg-amber-500/20 px-2 py-0.5 rounded text-[10px] font-semibold text-amber-200 border border-amber-400/30">👑 ${pr.name} (100%)</span>`).join('')}
                  ${partProps.map(pr => {
                    const sharePct = pr.p1Name === ownerName ? pr.p1Share : pr.p2Share;
                    return `<span class="bg-indigo-500/30 px-2 py-0.5 rounded text-[10px] font-semibold text-indigo-100 border border-indigo-400/30">🤝 ${pr.name} (${sharePct}%)</span>`;
                  }).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
      }

      const list = document.getElementById('partners-card-list');
      if (!Array.isArray(appData.partners)) appData.partners = [];

      if (appData.partners.length === 0) {
        list.innerHTML = `
          <div class="bg-white p-8 rounded-2xl text-center text-xs text-slate-400 border border-slate-200/80 space-y-2">
            <p>હજી સુધી કોઈ પાર્ટનર ઉમેર્યા નથી.</p>
            <button onclick="openAddPartner()" class="bg-indigo-600 text-white px-3 py-1.5 rounded-xl font-bold text-xs">+ પ્રથમ પાર્ટનર ઉમેરો</button>
          </div>
        `;
        return;
      }

      const monthProfits = computeDynamicPartnerProfits(t => t.month === curMonth);
      const allTimeProfits = computeDynamicPartnerProfits();

      list.innerHTML = appData.partners.map(p => {
        // Find properties linked to this partner
        const linkedProps = appData.properties.filter(prop => 
          prop.isPartnership && (prop.p1Name === p.name || prop.p2Name === p.name)
        );

        const pBreakdown = getPersonDetailedBreakdown(p.name);
        const totalNet = pBreakdown.totalNet;

        return `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-full bg-indigo-50 border-2 border-indigo-500 flex items-center justify-center text-xl text-indigo-700 font-bold shadow-sm">
                  🤝
                </div>
                <div>
                  <h3 class="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    ${p.name}
                  </h3>
                  <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <span>📞</span> ${p.mobile || 'મોબાઈલ નથી'}
                  </p>
                </div>
              </div>
              <span class="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                પાર્ટનર
              </span>
            </div>

            <!-- Prominent Total Earnings Card (v7.0 with 100% + 50% Breakdown) -->
            <div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-3 text-white shadow-sm space-y-2">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[11px] text-emerald-100 font-medium block">કુલ કમાણી (Total Earnings)</span>
                  <span class="text-xl font-extrabold tracking-tight">${fmt(totalNet)}</span>
                </div>
                <div class="text-right bg-white/20 px-2.5 py-1 rounded-lg backdrop-blur text-[11px]">
                  <span class="text-emerald-100 block text-[10px]">૧૦૦% સ્વતંત્ર + ભાગીદારી</span>
                  <span class="font-bold">${fmt(pBreakdown.selfNet)} + ${fmt(pBreakdown.partNet)}</span>
                </div>
              </div>
            </div>

            <!-- Linked Properties Strip -->
            <div class="bg-slate-50 p-2 rounded-xl border border-slate-100 text-xs">
              <span class="text-slate-400 text-[10px] block mb-1">ભાગીદારી વાળી પ્રોપર્ટી (${linkedProps.length}):</span>
              ${linkedProps.length > 0 ? `
                <div class="flex flex-wrap gap-1.5">
                  ${linkedProps.map(pr => `<span class="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700">🏢 ${pr.name}</span>`).join('')}
                </div>
              ` : `<span class="text-slate-400 italic">કોઈ પ્રોપર્ટી સાથે જોડાયેલ નથી</span>`}
            </div>

            <!-- Actions -->
            <div class="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100 text-xs">
              ${p.mobile ? `
                <a href="tel:${p.mobile}" class="py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold rounded-lg text-center transition">
                  📞 કોલ
                </a>
                <a href="https://wa.me/91${p.mobile}?text=${encodeURIComponent('નમસ્તે ' + p.name + ', આપનો ચાલુ મહિનાનો ભાગીદારી નફો ' + fmt(mNet) + ' છે. વિગત ચેક કરશો.')}" target="_blank" class="py-1.5 bg-green-50 text-green-700 hover:bg-green-100 font-semibold rounded-lg text-center transition">
                  💬 WhatsApp
                </a>
              ` : `
                <button disabled class="py-1.5 bg-slate-100 text-slate-400 font-semibold rounded-lg text-center">📞 કોલ</button>
                <button disabled class="py-1.5 bg-slate-100 text-slate-400 font-semibold rounded-lg text-center">💬 WhatsApp</button>
              `}
              <button onclick="editPartnerModal('${p.id}')" class="py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold rounded-lg text-center transition">
                ✏️ એડિટ
              </button>
              <button onclick="deletePartner('${p.id}')" class="py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 font-semibold rounded-lg text-center transition">
                🗑️ ડિલીટ
              </button>
            </div>
          </div>
        `;
      }).join('');
    }


    // Open Edit Owner Modal (v5.0)
    window.openEditOwnerModal = function() {
      if (!appData.owner) appData.owner = { name: 'હિતેશભાઈ (માલિક)', mobile: '9825123456' };
      document.getElementById('owner-name-input').value = appData.owner.name;
      document.getElementById('owner-mobile-input').value = appData.owner.mobile || '';
      document.getElementById('modal-owner').classList.remove('hidden');
    };
    // Open Add Partner Modal (Only Name & Mobile)
    window.openAddPartner = function() {
      document.getElementById('modal-partner-title').textContent = 'નવો પાર્ટનર ઉમેરો';
      document.getElementById('partner-edit-id').value = '';
      document.getElementById('form-partner').reset();
      document.getElementById('modal-partner').classList.remove('hidden');
    };

    // Edit Partner Modal (Only Name & Mobile)
    window.editPartnerModal = function(partnerId) {
      const p = appData.partners.find(x => x.id === partnerId);
      if (!p) return;
      document.getElementById('modal-partner-title').textContent = 'પાર્ટનર એડિટ કરો';
      document.getElementById('partner-edit-id').value = p.id;
      document.getElementById('partner-name').value = p.name;
      document.getElementById('partner-mobile').value = p.mobile || '';
      document.getElementById('modal-partner').classList.remove('hidden');
    };

    // Delete Partner
    window.deletePartner = function(partnerId) {
      const p = appData.partners.find(x => x.id === partnerId);
      if (!p) return;
      appData.partners = appData.partners.filter(x => x.id !== partnerId);
      saveData();
      renderPartners();
      renderDashboard();
      renderReports();
      showToast('પાર્ટનર સફળતાપૂર્વક ડિલીટ થયો!', 'success');
    };
    // RENDER: Dashboard (All-Time Total & Partner-Wise Total Breakdown - v6.0)
    function renderDashboard() {
      document.getElementById('dash-current-month-display').textContent = `કુલ હિસાબ (${appData.transactions.length} એન્ટ્રી)`;

      // Calculate ALL-TIME totals across all transactions
      let income = 0;
      let expense = 0;

      appData.transactions.forEach(t => {
        if (t.type === 'income') {
          income += t.amount;
        } else {
          expense += t.amount;
        }
      });

      const net = income - expense;

      document.getElementById('kpi-total-income').textContent = fmt(income);
      document.getElementById('kpi-total-expense').textContent = fmt(expense);
      document.getElementById('kpi-net-profit').textContent = fmt(net);

      // Occupancy badge
      const totalProps = appData.properties.length;
      const occupiedProps = new Set(appData.tenants.map(t => t.propertyId)).size;
      document.getElementById('dash-occupancy-badge').textContent = `${occupiedProps}/${totalProps} પ્રોપર્ટી ભાડે`;

      // Compute ALL-TIME Owner Breakdown (100% Self-Owned + Partnership Share - v7.0)
      const ownerName = (appData.owner && appData.owner.name) || 'જગદીશભાઈ દુધાત';
      const ownerBreak = getPersonDetailedBreakdown(ownerName);
      const dashOwnerTitle = document.getElementById('dash-owner-title');
      const dashOwnerProfit = document.getElementById('dash-owner-self-profit');
      if (dashOwnerTitle) dashOwnerTitle.textContent = `${ownerName} (૧૦૦% સ્વતંત્ર: ${fmt(ownerBreak.selfNet)} + 50% ભાગીદારી: ${fmt(ownerBreak.partNet)}):`;
      if (dashOwnerProfit) dashOwnerProfit.textContent = fmt(ownerBreak.totalNet);

      // Dynamic ALL-TIME Partner-Wise Total breakdown (v6.0 - All Transactions)
      const dynamicProfits = computeDynamicPartnerProfits();
      const partnersDiv = document.getElementById('dash-partners-split-list');
      const partnerEntries = Object.entries(dynamicProfits);

      if (partnerEntries.length === 0) {
        partnersDiv.innerHTML = `<div class="col-span-2 text-center text-indigo-200 text-xs py-1">કોઈ સક્રિય ભાગીદારી પ્રોપર્ટી નથી</div>`;
      } else {
        partnersDiv.innerHTML = partnerEntries.map(([name, amount]) => `
          <div class="bg-white/15 rounded-xl p-2.5 border border-white/15">
            <span class="text-indigo-200 text-[11px] block truncate">${name} (કુલ ભાગ):</span>
            <span class="font-extrabold text-white text-sm sm:text-base mt-0.5 block">${fmt(amount)}</span>
          </div>
        `).join('');
      }

      // All Transactions list on Home Page
      const recentList = document.getElementById('dash-recent-list');
      const sortedTxs = [...appData.transactions].sort((a, b) => b.date.localeCompare(a.date));

      if (sortedTxs.length === 0) {
        recentList.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">હજી સુધી કોઈ એન્ટ્રી નથી</p>`;
        return;
      }

      recentList.innerHTML = sortedTxs.map(t => {
        const prop = appData.properties.find(p => p.id === t.propertyId);
        const propName = prop ? prop.name : 'પ્રોપર્ટી';
        const isInc = t.type === 'income';
        return `
          <div class="py-2.5 flex items-center justify-between text-xs">
            <div class="flex items-center space-x-2.5">
              <div class="w-8 h-8 rounded-full ${isInc ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'} flex items-center justify-center font-bold text-sm">
                ${isInc ? '₹' : '🧾'}
              </div>
              <div>
                <p class="font-bold text-slate-800">${isInc ? 'ભાડું મળ્યું' : (t.category || 'ખર્ચ')} <span class="text-[11px] font-normal text-slate-500">(${propName})</span></p>
                <p class="text-[11px] text-slate-400">${t.date} • ${t.paymentMode}</p>
              </div>
            </div>
            <div class="text-right flex items-center space-x-2">
              <div>
                <p class="font-bold text-sm ${isInc ? 'text-emerald-600' : 'text-rose-600'}">
                  ${isInc ? '+' : '-'}${fmt(t.amount)}
                </p>
                <p class="text-[10px] text-slate-400">P1: ${fmt(t.p1Share)} | P2: ${fmt(t.p2Share)}</p>
              </div>
              ${isInc ? `<button onclick="openReceiptModal('${t.id}')" title="રસીદ જુઓ" class="p-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg text-xs font-bold transition">🧾</button>` : ''}
              <button onclick="deleteTransaction('${t.id}')" title="ડિલીટ" class="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-bold transition">🗑️</button>
            </div>
          </div>
        `;
      }).join('');
    }


    // Populate Partner Dropdowns across the App (Property Modal & Report Filter)
    function populatePartnerDropdowns() {
      const p1Select = document.getElementById('prop-p1-select');
      const p2Select = document.getElementById('prop-p2-select');
      const repPartnerSelect = document.getElementById('report-partner-select');

      if (!Array.isArray(appData.partners)) appData.partners = [];

      let partnerOpts = appData.partners.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
      if (!partnerOpts) {
        partnerOpts = `<option value="હિતેશભાઈ">હિતેશભાઈ</option><option value="રાજેશભાઈ">રાજેશભાઈ</option>`;
      }

      if (p1Select) p1Select.innerHTML = partnerOpts;
      if (p2Select) p2Select.innerHTML = partnerOpts;

      // Populate Report Filter Dropdown with Owner + Partners (v5.0)
      if (repPartnerSelect) {
        const currentVal = repPartnerSelect.value || 'ALL';
        const ownerName = (appData.owner && appData.owner.name) || 'મુખ્ય માલિક';
        let repOpts = `<option value="ALL">બધા પાર્ટનર્સ & માલિક (All)</option>` +
          `<option value="OWNER_SELF">👑 ${ownerName} (૧૦૦% સ્વતંત્ર માલિકી)</option>` +
          appData.partners.map(p => `<option value="${p.name}">🤝 ${p.name}</option>`).join('');
        repPartnerSelect.innerHTML = repOpts;
        repPartnerSelect.value = currentVal;
      }
    }
    // RENDER: Properties List
    function renderProperties() {
      const list = document.getElementById('properties-card-list');
      list.innerHTML = appData.properties.map(p => {
        const tenant = appData.tenants.find(t => t.propertyId === p.id);
        return `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-slate-800 text-sm">${p.name}</h3>
                  <span class="text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">${p.type}</span>
                </div>
                <p class="text-xs text-slate-500 mt-1">${p.address}</p>
              </div>
              <span class="text-xs px-2.5 py-1 rounded-full font-bold ${
                tenant ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }">
                ${tenant ? 'ભાડે આપેલ' : 'ખાલી'}
              </span>
            </div>

            <!-- Tenant Quick Strip -->
            ${tenant ? `
              <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                <div class="flex items-center space-x-2">
                  <div class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    👤
                  </div>
                  <div>
                    <span class="text-slate-400 text-[10px] block">વર્તમાન ભાડુઆત</span>
                    <span class="font-bold text-slate-800">${tenant.name}</span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-slate-400 text-[10px] block">માસિક ભાડું</span>
                  <span class="font-bold text-emerald-700">${fmt(tenant.rent)}</span>
                </div>
              </div>
            ` : `
              <div class="bg-amber-50 p-2 rounded-xl text-xs text-amber-800 flex justify-between items-center">
                <span>હાલમાં કોઈ ભાડુઆત નથી.</span>
                <button onclick="openAddTenantForProperty('${p.id}')" class="text-indigo-600 font-bold hover:underline text-xs">+ ભાડુઆત જોડો</button>
              </div>
            `}

            <!-- Partnership ratio & actions (v5.0 with Owner Name) -->
            <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
              <span class="text-slate-500">${p.isPartnership ? `ભાગીદારી: <strong class="text-indigo-700">${p.p1Name} (${p.p1Share}%) / ${p.p2Name} (${p.p2Share}%)</strong>` : `<strong class="text-emerald-700">👑 માલિક: ${(appData.owner && appData.owner.name) || 'મુખ્ય માલિક'} (૧૦૦% સ્વતંત્ર)</strong>`}</span>
              <div class="flex items-center gap-2">
                <button onclick="editProperty('${p.id}')" class="px-2.5 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg font-semibold text-xs transition">
                  ✏️ એડિટ
                </button>
                <button onclick="deleteProperty('${p.id}')" class="px-2.5 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg font-semibold text-xs transition">
                  🗑️ ડિલીટ
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // RENDER: Tenants Directory
    function renderTenants(filterQuery = '') {
      const list = document.getElementById('tenants-card-list');
      const q = filterQuery.toLowerCase().trim();

      const filtered = appData.tenants.filter(t => {
        if (!q) return true;
        const p = appData.properties.find(prop => prop.id === t.propertyId);
        return t.name.toLowerCase().includes(q) || 
               t.mobile.includes(q) || 
               (p && p.name.toLowerCase().includes(q));
      });

      if (filtered.length === 0) {
        list.innerHTML = `<div class="bg-white p-6 rounded-2xl text-center text-xs text-slate-400">કોઈ ભાડુઆત મળ્યા નથી.</div>`;
        return;
      }

      list.innerHTML = filtered.map(t => {
        const prop = appData.properties.find(p => p.id === t.propertyId);
        const propName = prop ? prop.name : 'અન્ય પ્રોપર્ટી';
        return `
          <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-14 h-14 rounded-full bg-indigo-100 border-2 border-indigo-500 overflow-hidden flex items-center justify-center font-bold text-indigo-700 text-xl shadow-sm">
                  ${t.photo ? `<img src="${t.photo}" class="w-full h-full object-cover">` : '👤'}
                </div>
                <div>
                  <h3 class="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    ${t.name}
                  </h3>
                  <p class="text-xs text-indigo-600 font-semibold flex items-center gap-1 mt-0.5">
                    <span>🏢</span> ${propName}
                  </p>
                  <p class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <span>📞</span> ${t.mobile}
                  </p>
                </div>
              </div>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                ${fmt(t.rent)}/માસ
              </span>
            </div>

            <!-- Address Strip -->
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
              <span class="text-slate-400 text-[10px] block">કાયમી સરનામું (Permanent Address):</span>
              <p class="text-slate-700 font-medium leading-relaxed">${t.address}</p>
            </div>

            <!-- Action buttons -->
            <div class="grid grid-cols-5 gap-1.5 pt-2 border-t border-slate-100 text-[11px]">
              <button onclick="viewTenantModal('${t.id}')" class="py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold rounded-lg text-center transition">
                કાર્ડ
              </button>
              <a href="tel:${t.mobile}" class="py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold rounded-lg text-center transition">
                📞 કોલ
              </a>
              <a href="https://wa.me/91${t.mobile}?text=${encodeURIComponent('નમસ્તે ' + t.name + ', આપનું ' + propName + ' નું આ મહિનાનું ભાડું ' + fmt(t.rent) + ' જમા કરાવવા વિનંતી. આભાર!')}" target="_blank" class="py-1.5 bg-amber-50 text-amber-800 hover:bg-amber-100 font-semibold rounded-lg text-center transition">
                🔔 રીમાઇન્ડર
              </a>
              <button onclick="editTenantModal('${t.id}')" class="py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg text-center transition">
                એડિટ
              </button>
              <button onclick="deleteTenant('${t.id}')" class="py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 font-semibold rounded-lg text-center transition">
                🗑️
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // View Tenant Profile Modal
    window.viewTenantModal = function(tenantId) {
      const t = appData.tenants.find(x => x.id === tenantId);
      if (!t) return;
      const prop = appData.properties.find(p => p.id === t.propertyId);

      document.getElementById('view-tenant-name').textContent = t.name;
      document.getElementById('view-tenant-property').textContent = prop ? prop.name : '-';
      document.getElementById('view-tenant-mobile').textContent = t.mobile;
      document.getElementById('view-tenant-rent').textContent = fmt(t.rent);
      document.getElementById('view-tenant-deposit').textContent = fmt(t.deposit);
      document.getElementById('view-tenant-start-date').textContent = t.startDate || '-';
      document.getElementById('view-tenant-id-proof').textContent = t.idProof || '-';
      document.getElementById('view-tenant-address').textContent = t.address;

      const avatar = document.getElementById('view-tenant-avatar');
      if (t.photo) {
        avatar.innerHTML = `<img src="${t.photo}" class="w-full h-full object-cover">`;
      } else {
        avatar.innerHTML = '👤';
      }

      document.getElementById('btn-view-call').href = `tel:${t.mobile}`;
      document.getElementById('btn-view-whatsapp').href = `https://wa.me/91${t.mobile}`;

      document.getElementById('modal-view-tenant').classList.remove('hidden');
    };

    // Delete Property with In-page Confirmation Modal
    window.deleteProperty = function(propId) {
      const prop = appData.properties.find(p => p.id === propId);
      if (!prop) return;

      const linkedTenant = appData.tenants.find(t => t.propertyId === propId);
      document.getElementById('delete-target-prop-id').value = propId;
      document.getElementById('confirm-delete-prop-desc').textContent = `"${prop.name}" પ્રોપર્ટી ડિલીટ કરવાથી તેની યાદીમાંથી હટી જશે.`;

      const warningEl = document.getElementById('confirm-delete-prop-warning');
      if (linkedTenant) {
        warningEl.textContent = `⚠️ આ પ્રોપર્ટી સાથે ભાડુઆત "${linkedTenant.name}" જોડાયેલ છે. તે પણ રિમૂવ થશે.`;
        warningEl.classList.remove('hidden');
      } else {
        warningEl.classList.add('hidden');
      }

      document.getElementById('modal-confirm-delete-property').classList.remove('hidden');
    };

    function executePropertyDeletion(propId) {
      // Remove linked tenants
      appData.tenants = appData.tenants.filter(t => t.propertyId !== propId);
      // Remove property
      appData.properties = appData.properties.filter(p => p.id !== propId);

      saveData();
      populatePropertyDropdowns();
      renderProperties();
      renderTenants();
      renderDashboard();
      showToast('પ્રોપર્ટી સફળતાપૂર્વક ડિલીટ થઈ ગઈ!', 'success');
    }

    // Edit Property
    window.editProperty = function(propId) {
      const p = appData.properties.find(x => x.id === propId);
      if (!p) return;
      document.getElementById('modal-property-title').textContent = 'પ્રોપર્ટી એડિટ કરો';
      document.getElementById('prop-edit-id').value = p.id;
      document.getElementById('prop-name').value = p.name;
      document.getElementById('prop-type').value = p.type;
      document.getElementById('prop-address').value = p.address;
      const isPart = p.isPartnership !== false;
      const partCheckbox = document.getElementById('prop-has-partnership');
      const partContainer = document.getElementById('prop-partnership-fields-container');
      const partBadge = document.getElementById('prop-partnership-status-badge');

      partCheckbox.checked = isPart;
      if (isPart) {
        partContainer.classList.remove('hidden');
        partBadge.textContent = 'ભાગીદારી';
        partBadge.className = 'text-[10px] font-semibold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md border border-indigo-200';
      } else {
        partContainer.classList.add('hidden');
        partBadge.textContent = 'સ્વતંત્ર (૧૦૦%)';
        partBadge.className = 'text-[10px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200';
      }

      populatePartnerDropdowns();
      const p1Sel = document.getElementById('prop-p1-select');
      const p2Sel = document.getElementById('prop-p2-select');
      if (p1Sel) p1Sel.value = p.p1Name || (appData.partners[0] ? appData.partners[0].name : 'હિતેશભાઈ');
      if (p2Sel) p2Sel.value = p.p2Name || (appData.partners[1] ? appData.partners[1].name : 'રાજેશભાઈ');
      document.getElementById('prop-p1-share').value = p.p1Share || 50;
      document.getElementById('prop-p2-share').value = p.p2Share || 50;

      const modalDelBtn = document.getElementById('btn-modal-delete-property');
      if (modalDelBtn) modalDelBtn.classList.remove('hidden');

      document.getElementById('modal-property').classList.remove('hidden');
    };

    // Open Add Tenant for Property
    window.openAddTenantForProperty = function(propId) {
      openAddTenant();
      const select = document.getElementById('tenant-property-id');
      if (select) select.value = propId;
    };

    // Open Add Tenant Modal
    function openAddTenant() {
      document.getElementById('modal-tenant-title').textContent = 'નવો ભાડુઆત ઉમેરો';
      document.getElementById('tenant-edit-id').value = '';
      document.getElementById('form-tenant').reset();
      document.getElementById('tenant-photo-data').value = '';
      document.getElementById('tenant-photo-preview').innerHTML = '👤';
      document.getElementById('tenant-start-date').value = new Date().toISOString().slice(0, 10);
      populatePropertyDropdowns();
      document.getElementById('modal-tenant').classList.remove('hidden');
    }

    // Edit Tenant Modal
    window.editTenantModal = function(tenantId) {
      const t = appData.tenants.find(x => x.id === tenantId);
      if (!t) return;
      document.getElementById('modal-tenant-title').textContent = 'ભાડુઆત એડિટ કરો';
      document.getElementById('tenant-edit-id').value = t.id;
      document.getElementById('tenant-name').value = t.name;
      document.getElementById('tenant-mobile').value = t.mobile;
      document.getElementById('tenant-address').value = t.address;
      document.getElementById('tenant-rent').value = t.rent;
      document.getElementById('tenant-deposit').value = t.deposit;
      document.getElementById('tenant-start-date').value = t.startDate || '';
      document.getElementById('tenant-id-proof').value = t.idProof || '';
      document.getElementById('tenant-photo-data').value = t.photo || '';

      const preview = document.getElementById('tenant-photo-preview');
      if (t.photo) {
        preview.innerHTML = `<img src="${t.photo}" class="w-full h-full object-cover">`;
      } else {
        preview.innerHTML = '👤';
      }

      populatePropertyDropdowns();
      document.getElementById('tenant-property-id').value = t.propertyId;
      document.getElementById('modal-tenant').classList.remove('hidden');
    };

    // RENDER: Reports & Annual Summary Chart with Partner Filter (v4.0)
    function renderReports() {
      populatePartnerDropdowns();
      const selectedYear = document.getElementById('report-year-select').value;
      const partnerSelect = document.getElementById('report-partner-select');
      const selectedPartner = partnerSelect ? partnerSelect.value : 'ALL';

      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      const monthLabels = ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઓગ', 'સપ્ટે', 'ઓક્ટો', 'નવે', 'ડિસે'];

      let incomeData = new Array(12).fill(0);
      let expenseData = new Array(12).fill(0);
      let annualIncome = 0;
      let annualExpense = 0;

      appData.transactions.forEach(t => {
        if (t.month && t.month.startsWith(selectedYear)) {
          const mIdx = parseInt(t.month.split('-')[1], 10) - 1;
          if (mIdx >= 0 && mIdx < 12) {
            const prop = appData.properties.find(p => p.id === t.propertyId);
            let effectiveIncome = 0;
            let effectiveExpense = 0;

            const ownerName = (appData.owner && appData.owner.name) || 'જગદીશભાઈ દુધાત';
            if (selectedPartner === 'ALL') {
              // ALL COMBINED (Partnership + Self-Owned)
              if (t.type === 'income') effectiveIncome = t.amount;
              else effectiveExpense = t.amount;
            } else if (selectedPartner === 'OWNER_SELF') {
              // ONLY 100% SELF-OWNED PROPERTIES CALCULATION
              if (prop && (!prop.isPartnership || prop.p1Name === prop.p2Name)) {
                if (t.type === 'income') effectiveIncome = t.amount;
                else effectiveExpense = t.amount;
              }
            } else {
              // SPECIFIC PERSON FILTER (Includes their 100% Self-Owned + Partnership Share!)
              if (prop) {
                if (!prop.isPartnership || prop.p1Name === prop.p2Name) {
                  const targetOwner = !prop.isPartnership ? ownerName : (prop.p1Name || ownerName);
                  if (targetOwner === selectedPartner) {
                    if (t.type === 'income') effectiveIncome = t.amount;
                    else effectiveExpense = t.amount;
                  }
                } else {
                  const s1 = (t.p1Share !== undefined && t.p2Share !== undefined && (t.p1Share + t.p2Share === t.amount))
                    ? t.p1Share
                    : Math.round((t.amount * (prop.p1Share || 50)) / 100);
                  const s2 = (t.p1Share !== undefined && t.p2Share !== undefined && (t.p1Share + t.p2Share === t.amount))
                    ? t.p2Share
                    : (t.amount - s1);
                  if (prop.p1Name === selectedPartner) {
                    if (t.type === 'income') effectiveIncome += s1;
                    else effectiveExpense += s1;
                  }
                  if (prop.p2Name === selectedPartner) {
                    if (t.type === 'income') effectiveIncome += s2;
                    else effectiveExpense += s2;
                  }
                }
              }
            }

            incomeData[mIdx] += effectiveIncome;
            expenseData[mIdx] += effectiveExpense;
            annualIncome += effectiveIncome;
            annualExpense += effectiveExpense;
          }
        }
      });

      const annualNet = annualIncome - annualExpense;

      document.getElementById('rep-annual-income').textContent = fmt(annualIncome);
      document.getElementById('rep-annual-expense').textContent = fmt(annualExpense);
      document.getElementById('rep-annual-net').textContent = fmt(annualNet);

      // Annual Partner split breakdown section
      const repPartnersDiv = document.getElementById('rep-partners-annual-split');
      if (selectedPartner === 'ALL') {
        const annualPartnerProfits = computeDynamicPartnerProfits(t => t.month && t.month.startsWith(selectedYear));
        const annualPartnerEntries = Object.entries(annualPartnerProfits);

        if (annualPartnerEntries.length === 0) {
          repPartnersDiv.innerHTML = `<div class="col-span-2 text-center text-indigo-200 text-xs py-1">આ વર્ષે કોઈ ભાગીદારી હિસાબ નથી</div>`;
        } else {
          repPartnersDiv.innerHTML = annualPartnerEntries.map(([name, netShare]) => `
            <div class="bg-indigo-800/80 p-2.5 rounded-lg border border-indigo-700">
              <span class="text-indigo-200 block text-[11px] truncate">${name} વાર્ષિક ભાગ:</span>
              <span class="font-bold text-sm text-white">${fmt(netShare)}</span>
            </div>
          `).join('');
        }
      } else if (selectedPartner === 'OWNER_SELF') {
        const ownerName = (appData.owner && appData.owner.name) || 'મુખ્ય માલિક';
        repPartnersDiv.innerHTML = `
          <div class="col-span-2 bg-gradient-to-r from-indigo-900 to-slate-900 p-3 rounded-xl border border-indigo-700 flex items-center justify-between">
            <div>
              <span class="text-amber-300 text-xs font-bold block flex items-center gap-1">👑 ${ownerName}</span>
              <span class="text-[11px] text-indigo-200">૧૦૦% સ્વતંત્ર માલિકી પ્રોપર્ટીનો વાર્ષિક નફો (${selectedYear})</span>
            </div>
            <div class="text-right">
              <span class="text-base font-extrabold text-emerald-300">${fmt(annualNet)}</span>
            </div>
          </div>
        `;
      } else {
        repPartnersDiv.innerHTML = `
          <div class="col-span-2 bg-indigo-800/80 p-3 rounded-lg border border-indigo-700 flex items-center justify-between">
            <div>
              <span class="text-indigo-200 text-xs block">પાર્ટનર: <strong class="text-white">${selectedPartner}</strong></span>
              <span class="text-[11px] text-indigo-300">વર્ષ ${selectedYear} માં ભાગીદારી કમાણી</span>
            </div>
            <div class="text-right">
              <span class="text-base font-extrabold text-emerald-300">${fmt(annualNet)}</span>
            </div>
          </div>
        `;
      }

      // Render Table
      const tableBody = document.getElementById('rep-monthly-table-body');
      tableBody.innerHTML = months.map((m, idx) => {
        const inc = incomeData[idx];
        const exp = expenseData[idx];
        const netMonth = inc - exp;
        return `
          <tr class="hover:bg-slate-50">
            <td class="py-2 px-2.5 font-bold text-slate-700">${monthLabels[idx]} (${m})</td>
            <td class="py-2 px-2.5 text-right text-emerald-600 font-semibold">${inc > 0 ? fmt(inc) : '-'}</td>
            <td class="py-2 px-2.5 text-right text-rose-600 font-semibold">${exp > 0 ? fmt(exp) : '-'}</td>
            <td class="py-2 px-2.5 text-right font-bold ${netMonth >= 0 ? 'text-indigo-700' : 'text-rose-700'}">
              ${netMonth !== 0 ? fmt(netMonth) : '-'}
            </td>
          </tr>
        `;
      }).join('');

      // Render Chart.js
      renderChart(monthLabels, incomeData, expenseData);
    }

    function renderChart(labels, income, expense) {
      const ctx = document.getElementById('annual-summary-chart');
      if (!ctx) return;

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'ભાડું આવક (Income)',
              data: income,
              backgroundColor: '#10b981',
              borderRadius: 6,
              maxBarThickness: 16
            },
            {
              label: 'ખર્ચ (Expense)',
              data: expense,
              backgroundColor: '#f43f5e',
              borderRadius: 6,
              maxBarThickness: 16
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                boxWidth: 12,
                font: { size: 10 }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(val) { return '₹' + val.toLocaleString('en-IN'); },
                font: { size: 9 }
              },
              grid: { color: '#f1f5f9' }
            },
            x: {
              ticks: { font: { size: 9 } },
              grid: { display: false }
            }
          }
        }
      });
    }

    // Google Sheets Sync (Silent & Safe - No intrusive error toasts on entry)
    async function syncToGoogleSheets(transaction) {
      const url = (appData.settings && appData.settings.googleSheetUrl || '').trim();
      // Only attempt network sync if a valid Google Apps Script Web App URL is configured
      if (!url || !url.includes('script.google.com')) {
        return; // Entry is safely saved in local storage without any error
      }

      const prop = appData.properties.find(p => p.id === transaction.propertyId);
      const tenant = appData.tenants.find(t => t.id === transaction.tenantId) || appData.tenants.find(t => t.propertyId === transaction.propertyId);

      const payload = {
        ...transaction,
        property: prop ? prop.name : '-',
        tenant: (transaction.type === 'income' && tenant) ? tenant.name : '-',
        p1Share: transaction.p1Share || 0,
        p2Share: transaction.p2Share || 0,
        p1_share: transaction.p1Share || 0,
        p2_share: transaction.p2Share || 0
      };

      try {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
        showToast('✅ Google Sheet માં એન્ટ્રી ઓટો-અપડેટ થઈ ગઈ!', 'success');
      } catch (e) {
        console.warn('Sync failed (offline):', e);
        showToast('Google Sheet સિંક નિષ્ફળ (ઓફલાઇન સેવ થયું)', 'error');
      }
    }

    // Open Rent Receipt Modal (v2.0)
    window.openReceiptModal = function(txId) {
      const tx = appData.transactions.find(x => x.id === txId);
      if (!tx) return;
      const prop = appData.properties.find(p => p.id === tx.propertyId);
      const tenant = appData.tenants.find(t => t.id === tx.tenantId) || appData.tenants.find(t => t.propertyId === tx.propertyId);

      const propName = prop ? prop.name : 'પ્રોપર્ટી';
      const tenantName = tenant ? tenant.name : 'ભાડુઆત';
      const mobile = tenant ? tenant.mobile : '';

      document.getElementById('receipt-id-date').textContent = `રસીદ નં: #${tx.id.toUpperCase()} | તારીખ: ${tx.date}`;
      document.getElementById('receipt-prop').textContent = propName;
      document.getElementById('receipt-tenant').textContent = tenantName;
      document.getElementById('receipt-month').textContent = tx.month;
      document.getElementById('receipt-mode').textContent = tx.paymentMode;
      document.getElementById('receipt-amount').textContent = fmt(tx.amount);
      document.getElementById('receipt-split-info').textContent = `ભાગીદારી: ${prop ? prop.p1Name : 'P1'} (${fmt(tx.p1Share)}) | ${prop ? prop.p2Name : 'P2'} (${fmt(tx.p2Share)})`;

      const waMsg = `🧾 *ભાડા ચુકવણી રસીદ (Rent Receipt)*%0A-------------------------0A*રસીદ નં:* ${tx.id.toUpperCase()}%0A*તારીખ:* ${tx.date}%0A*પ્રોપર્ટી:* ${propName}%0A*ભાડુઆત:* ${tenantName}%0A*મહિનો:* ${tx.month}%0A*મળેલ રકમ:* ${fmt(tx.amount)}%0A*માધ્યમ:* ${tx.paymentMode}%0A-------------------------0Aઆભાર! ભાડું મળી ગયું છે.`;
      document.getElementById('btn-whatsapp-receipt').href = `https://wa.me/${mobile ? '91' + mobile : ''}?text=${waMsg}`;

      document.getElementById('modal-receipt').classList.remove('hidden');
    };

    // Delete Transaction (v2.0)
    window.deleteTransaction = function(txId) {
      appData.transactions = appData.transactions.filter(t => t.id !== txId);
      saveData();
      renderDashboard();
      showToast('એન્ટ્રી ડિલીટ કરવામાં આવી!', 'success');
    };

    // Delete Tenant (v2.0)
    window.deleteTenant = function(tenId) {
      appData.tenants = appData.tenants.filter(t => t.id !== tenId);
      saveData();
      renderTenants();
      renderDashboard();
      showToast('ભાડુઆત વિગત ડિલીટ થઈ ગઈ!', 'success');
    };

    // Export CSV function
    function exportToCSV() {
      const headers = ['ID', 'Date', 'Month', 'Type', 'Property', 'Tenant', 'Category', 'Amount', 'P1_Share', 'P2_Share', 'PaymentMode', 'Remarks'];
      const rows = appData.transactions.map(t => {
        const prop = appData.properties.find(p => p.id === t.propertyId);
        const tenant = appData.tenants.find(x => x.id === t.tenantId);
        return [
          t.id,
          t.date,
          t.month,
          t.type,
          `"${(prop ? prop.name : '').replace(/"/g, '""')}"`,
          `"${(tenant ? tenant.name : '').replace(/"/g, '""')}"`,
          t.category || '',
          t.amount,
          t.p1Share,
          t.p2Share,
          t.paymentMode,
          `"${(t.remarks || '').replace(/"/g, '""')}"`
        ];
      });

      const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `rent_manager_report_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('CSV ફાઇલ ડાઉનલોડ થઈ ગઈ!', 'success');
    }

    // ==================== EVENT LISTENERS ====================
    function initRentManagerApp() {
      loadData();
      populatePartnerDropdowns();
      setupEntryFormDefaults();
      renderDashboard();

      // Navigation tab clicks
      document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          switchTab(btn.getAttribute('data-target'));
        });
      });

      // Header Google Sheets Sync button
      document.getElementById('btn-header-sync').addEventListener('click', () => {
        switchTab('tab-settings');
      });

      // Quick action buttons on dashboard
      document.getElementById('quick-act-rent').addEventListener('click', () => {
        switchTab('tab-entry');
        document.getElementById('toggle-type-income').click();
      });
      document.getElementById('quick-act-expense').addEventListener('click', () => {
        switchTab('tab-entry');
        document.getElementById('toggle-type-expense').click();
      });
      document.getElementById('quick-act-property').addEventListener('click', () => {
        switchTab('tab-properties');
      });
      document.getElementById('quick-act-tenant').addEventListener('click', () => {
        switchTab('tab-tenants');
      });
      document.getElementById('btn-see-all-entries').addEventListener('click', () => {
        switchTab('tab-reports');
      });

      // Toggle Income / Expense in Entry Form
      const btnIncome = document.getElementById('toggle-type-income');
      const btnExpense = document.getElementById('toggle-type-expense');
      const hiddenType = document.getElementById('entry-type');
      const expCatContainer = document.getElementById('entry-expense-cat-container');

      btnIncome.addEventListener('click', () => {
        hiddenType.value = 'income';
        btnIncome.className = 'py-2.5 text-xs sm:text-sm font-bold rounded-lg text-white bg-emerald-600 shadow-sm transition';
        btnExpense.className = 'py-2.5 text-xs sm:text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 transition';
        expCatContainer.classList.add('hidden');
        handlePropertyChangeInEntry();
      });

      btnExpense.addEventListener('click', () => {
        hiddenType.value = 'expense';
        btnExpense.className = 'py-2.5 text-xs sm:text-sm font-bold rounded-lg text-white bg-rose-600 shadow-sm transition';
        btnIncome.className = 'py-2.5 text-xs sm:text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 transition';
        expCatContainer.classList.remove('hidden');
        handlePropertyChangeInEntry();
      });

      // Expense Category Change listener for custom input
      const expCategorySelect = document.getElementById('entry-expense-category');
      const expCustomInput = document.getElementById('entry-expense-custom');
      if (expCategorySelect && expCustomInput) {
        expCategorySelect.addEventListener('change', (e) => {
          if (e.target.value === '__CUSTOM__') {
            expCustomInput.classList.remove('hidden');
            expCustomInput.focus();
          } else {
            expCustomInput.classList.add('hidden');
            expCustomInput.value = '';
          }
        });
      }

      // Property selection change
      document.getElementById('entry-property').addEventListener('change', handlePropertyChangeInEntry);

      // Amount input change
      document.getElementById('entry-amount').addEventListener('input', updateLiveSplitPreview);

      // Save Transaction Form
      document.getElementById('form-transaction').addEventListener('submit', (e) => {
        e.preventDefault();
        const type = hiddenType.value;
        const date = document.getElementById('entry-date').value;
        const month = document.getElementById('entry-month').value;
        const propertyId = document.getElementById('entry-property').value;
        const amount = parseFloat(document.getElementById('entry-amount').value) || 0;
        const paymentMode = document.getElementById('entry-payment-mode').value;
        const remarks = document.getElementById('entry-remarks').value;

        const prop = appData.properties.find(p => p.id === propertyId);
        const tenant = appData.tenants.find(t => t.propertyId === propertyId);

        let p1Share = amount;
        let p2Share = 0;
        if (prop && prop.isPartnership) {
          p1Share = Math.round((amount * (prop.p1Share || 50)) / 100);
          p2Share = amount - p1Share;
        }

        const newTx = {
          id: 'tx-' + Date.now(),
          date,
          month,
          type,
          propertyId,
          tenantId: type === 'income' && tenant ? tenant.id : null,
          category: type === 'income' ? 'ભાડું' : (document.getElementById('entry-expense-category').value === '__CUSTOM__' ? (document.getElementById('entry-expense-custom').value.trim() || 'અન્ય ખર્ચ') : document.getElementById('entry-expense-category').value),
          amount,
          p1Share,
          p2Share,
          paymentMode,
          remarks
        };

        appData.transactions.unshift(newTx);
        saveData();
        syncToGoogleSheets(newTx);

        showToast(`${type === 'income' ? 'ભાડા' : 'ખર્ચ'}ની એન્ટ્રી સફળતાપૂર્વક થઈ!`, 'success');

        // Reset and back to Dashboard
        document.getElementById('entry-amount').value = '';
        document.getElementById('entry-remarks').value = '';
        switchTab('tab-dashboard');
      });

      // Tenant Photo Upload (FileReader to Base64)
      const photoInput = document.getElementById('tenant-photo-input');
      photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const b64 = event.target.result;
            document.getElementById('tenant-photo-data').value = b64;
            document.getElementById('tenant-photo-preview').innerHTML = `<img src="${b64}" class="w-full h-full object-cover">`;
          };
          reader.readAsDataURL(file);
        }
      });

      // Tenant Search
      document.getElementById('tenant-search-input').addEventListener('input', (e) => {
        renderTenants(e.target.value);
      });

      // Modals Open/Close
      document.getElementById('btn-open-add-property').addEventListener('click', () => {
        document.getElementById('modal-property-title').textContent = 'નવી પ્રોપર્ટી ઉમેરો';
        document.getElementById('prop-edit-id').value = '';
        document.getElementById('form-property').reset();

        populatePartnerDropdowns();
        // Default: Partnership is NOT checked (optional)
        const partCheckbox = document.getElementById('prop-has-partnership');
        const partContainer = document.getElementById('prop-partnership-fields-container');
        const partBadge = document.getElementById('prop-partnership-status-badge');
        partCheckbox.checked = false;
        partContainer.classList.add('hidden');
        partBadge.textContent = 'સ્વતંત્ર (૧૦૦%)';
        partBadge.className = 'text-[10px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200';

        const p1Sel = document.getElementById('prop-p1-select');
        const p2Sel = document.getElementById('prop-p2-select');
        if (p1Sel && appData.partners[0]) p1Sel.value = appData.partners[0].name;
        if (p2Sel && appData.partners[1]) p2Sel.value = appData.partners[1].name;
        document.getElementById('prop-p1-share').value = 50;
        document.getElementById('prop-p2-share').value = 50;

        const modalDelBtn = document.getElementById('btn-modal-delete-property');
        if (modalDelBtn) modalDelBtn.classList.add('hidden');
        document.getElementById('modal-property').classList.remove('hidden');
      });
      document.getElementById('btn-close-property-modal').addEventListener('click', () => {
        document.getElementById('modal-property').classList.add('hidden');
      });

      document.getElementById('btn-open-add-tenant').addEventListener('click', openAddTenant);
      document.getElementById('btn-close-tenant-modal').addEventListener('click', () => {
        document.getElementById('modal-tenant').classList.add('hidden');
      });

      document.getElementById('btn-close-view-tenant').addEventListener('click', () => {
        document.getElementById('modal-view-tenant').classList.add('hidden');
      });

      // Save Property Form
      document.getElementById('form-property').addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('prop-edit-id').value;
        const name = document.getElementById('prop-name').value;
        const type = document.getElementById('prop-type').value;
        const address = document.getElementById('prop-address').value;

        // Partnership Checkbox evaluation
        const isPartnership = document.getElementById('prop-has-partnership').checked;
        let p1Name = 'હિતેશભાઈ';
        let p1Share = 100;
        let p2Name = '';
        let p2Share = 0;

        if (isPartnership) {
          const p1Sel = document.getElementById('prop-p1-select');
          const p2Sel = document.getElementById('prop-p2-select');
          p1Name = (p1Sel ? p1Sel.value : '') || 'પાર્ટનર ૧';
          p1Share = parseFloat(document.getElementById('prop-p1-share').value) || 50;
          p2Name = (p2Sel ? p2Sel.value : '') || 'પાર્ટનર ૨';
          p2Share = parseFloat(document.getElementById('prop-p2-share').value) || 50;
        }

        if (editId) {
          const idx = appData.properties.findIndex(p => p.id === editId);
          if (idx !== -1) {
            appData.properties[idx] = { ...appData.properties[idx], name, type, address, isPartnership, p1Name, p1Share, p2Name, p2Share };
          }
          showToast('પ્રોપર્ટી અપડેટ થઈ ગઈ!', 'success');
        } else {
          const newProp = {
            id: 'prop-' + Date.now(),
            name, type, address, isPartnership, p1Name, p1Share, p2Name, p2Share
          };
          appData.properties.push(newProp);
          showToast('નવી પ્રોપર્ટી ઉમેરાઈ ગઈ!', 'success');
        }

        saveData();
        populatePropertyDropdowns();
        renderProperties();
        document.getElementById('modal-property').classList.add('hidden');
      });

      // Save Tenant Form
      document.getElementById('form-tenant').addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('tenant-edit-id').value;
        const name = document.getElementById('tenant-name').value;
        const mobile = document.getElementById('tenant-mobile').value;
        const propertyId = document.getElementById('tenant-property-id').value;
        const address = document.getElementById('tenant-address').value;
        const rent = parseFloat(document.getElementById('tenant-rent').value) || 0;
        const deposit = parseFloat(document.getElementById('tenant-deposit').value) || 0;
        const startDate = document.getElementById('tenant-start-date').value;
        const idProof = document.getElementById('tenant-id-proof').value;
        const photo = document.getElementById('tenant-photo-data').value;

        if (editId) {
          const idx = appData.tenants.findIndex(t => t.id === editId);
          if (idx !== -1) {
            appData.tenants[idx] = { ...appData.tenants[idx], name, mobile, propertyId, address, rent, deposit, startDate, idProof, photo };
          }
          showToast('ભાડુઆત વિગત અપડેટ થઈ ગઈ!', 'success');
        } else {
          const newTenant = {
            id: 'ten-' + Date.now(),
            propertyId, name, mobile, address, rent, deposit, startDate, idProof, photo
          };
          appData.tenants.push(newTenant);
          showToast('નવો ભાડુઆત સફળતાપૂર્વક ઉમેરાયો!', 'success');
        }

        saveData();
        renderTenants();
        document.getElementById('modal-tenant').classList.add('hidden');
      });

      // Report Partner & Year Select Change (v4.0)
      const repPartnerSelect = document.getElementById('report-partner-select');
      if (repPartnerSelect) {
        repPartnerSelect.addEventListener('change', renderReports);
      }
      document.getElementById('report-year-select').addEventListener('change', renderReports);

      // Export CSV Button
      document.getElementById('btn-export-csv').addEventListener('click', exportToCSV);

      // Google Sheet Settings
      const sheetUrlInput = document.getElementById('settings-sheet-url');
      if (appData.settings.googleSheetUrl) {
        sheetUrlInput.value = appData.settings.googleSheetUrl;
      }
      document.getElementById('btn-save-sheet-url').addEventListener('click', () => {
        const val = sheetUrlInput.value.trim();
        appData.settings.googleSheetUrl = val;
        saveData();
        if (val.includes('docs.google.com/spreadsheets')) {
          showToast('⚠️ આ સામાન્ય Sheet લિંક છે! ઓટો-એન્ટ્રી માટે Apps Script (script.google.com/.../exec) URL નાખો.', 'error');
        } else {
          showToast('✅ Google Apps Script Web App URL સેવ થઈ ગયું!', 'success');
        }
      });

      // Sync All Now
      document.getElementById('btn-sync-all-sheets').addEventListener('click', async () => {
        if (!appData.settings.googleSheetUrl) {
          showToast('પહેલા Google Sheet Webhook URL ઉમેરો!', 'error');
          return;
        }
        showToast('સિંક શરૂ થઈ રહ્યું છે...', 'success');
        try {
          for (let tx of appData.transactions) {
            await syncToGoogleSheets(tx);
          }
          showToast('બધી એન્ટ્રીઓ સફળતાપૂર્વક સિંક થઈ ગઈ!', 'success');
        } catch (e) {
          showToast('સિંક દરમિયાન ભૂલ આવી', 'error');
        }
      });

      // Copy Apps Script Code
      document.getElementById('btn-copy-script-code').addEventListener('click', () => {
        const code = document.getElementById('script-code-block').innerText;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(code).then(() => {
            showToast('Apps Script કોડ કોપી થઈ ગયો!', 'success');
          }).catch(() => {
            fallbackCopy(code);
          });
        } else {
          fallbackCopy(code);
        }
      });

      function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Apps Script કોડ કોપી થઈ ગયો!', 'success');
      }

      // Owner Profile Modal Listeners (v5.0)
      document.getElementById('btn-close-owner-modal').addEventListener('click', () => {
        document.getElementById('modal-owner').classList.add('hidden');
      });

      document.getElementById('form-owner').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('owner-name-input').value.trim();
        const mobile = document.getElementById('owner-mobile-input').value.trim();
        if (name) {
          appData.owner = { name, mobile };
          saveData();
          populatePartnerDropdowns();
          renderPartners();
          renderProperties();
          renderDashboard();
          renderReports();
          showToast('માલિક પ્રોફાઇલ સફળતાપૂર્વક સેવ થઈ ગઈ!', 'success');
          document.getElementById('modal-owner').classList.add('hidden');
        }
      });

      // Open & Close Partner Modal Listeners
      document.getElementById('btn-open-add-partner').addEventListener('click', openAddPartner);
      document.getElementById('btn-close-partner-modal').addEventListener('click', () => {
        document.getElementById('modal-partner').classList.add('hidden');
      });

      // Save Partner Form Submit (Only Name & Mobile Number)
      document.getElementById('form-partner').addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('partner-edit-id').value;
        const name = document.getElementById('partner-name').value.trim();
        const mobile = document.getElementById('partner-mobile').value.trim();

        if (!Array.isArray(appData.partners)) appData.partners = [];

        if (editId) {
          const idx = appData.partners.findIndex(p => p.id === editId);
          if (idx !== -1) {
            const oldName = appData.partners[idx].name;
            appData.partners[idx] = { ...appData.partners[idx], name, mobile };
            // Update property partner references if renamed
            appData.properties.forEach(pr => {
              if (pr.p1Name === oldName) pr.p1Name = name;
              if (pr.p2Name === oldName) pr.p2Name = name;
            });
          }
          showToast('પાર્ટનર વિગતો અપડેટ થઈ!', 'success');
        } else {
          const newPart = {
            id: 'part-' + Date.now(),
            name, mobile
          };
          appData.partners.push(newPart);
          showToast('નવો પાર્ટનર સફળતાપૂર્વક ઉમેરાયો!', 'success');
        }

        saveData();
        populatePartnerDropdowns();
        renderPartners();
        renderDashboard();
        renderReports();
        document.getElementById('modal-partner').classList.add('hidden');
      });

      // Confirm Delete Property Modal Listeners
      document.getElementById('btn-cancel-delete-prop').addEventListener('click', () => {
        document.getElementById('modal-confirm-delete-property').classList.add('hidden');
      });
      document.getElementById('btn-confirm-delete-prop').addEventListener('click', () => {
        const propId = document.getElementById('delete-target-prop-id').value;
        if (propId) {
          executePropertyDeletion(propId);
        }
        document.getElementById('modal-confirm-delete-property').classList.add('hidden');
      });
      document.getElementById('btn-modal-delete-property').addEventListener('click', () => {
        const propId = document.getElementById('prop-edit-id').value;
        if (propId) {
          document.getElementById('modal-property').classList.add('hidden');
          deleteProperty(propId);
        }
      });

      // Partnership Checkbox Toggle in Property Modal
      const partCheckbox = document.getElementById('prop-has-partnership');
      if (partCheckbox) {
        partCheckbox.addEventListener('change', (e) => {
          const partContainer = document.getElementById('prop-partnership-fields-container');
          const partBadge = document.getElementById('prop-partnership-status-badge');
          if (e.target.checked) {
            partContainer.classList.remove('hidden');
            partBadge.textContent = 'ભાગીદારી';
            partBadge.className = 'text-[10px] font-semibold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md border border-indigo-200';
          } else {
            partContainer.classList.add('hidden');
            partBadge.textContent = 'સ્વતંત્ર (૧૦૦%)';
            partBadge.className = 'text-[10px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200';
          }
        });
      }

      // Receipt Modal Close & Print
      document.getElementById('btn-close-receipt').addEventListener('click', () => {
        document.getElementById('modal-receipt').classList.add('hidden');
      });
      document.getElementById('btn-print-receipt').addEventListener('click', () => {
        window.print();
      });

      // JSON Backup Download (v2.0)
      document.getElementById('btn-backup-json').addEventListener('click', () => {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(appData, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute('href', dataStr);
        dlAnchor.setAttribute('download', `rent_manager_backup_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
        showToast('સંપૂર્ણ બેકઅપ ફાઇલ ડાઉનલોડ થઈ ગઈ!', 'success');
      });

      // JSON Restore Upload (v2.0)
      document.getElementById('input-restore-json').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const imported = JSON.parse(ev.target.result);
            if (imported && Array.isArray(imported.properties) && Array.isArray(imported.transactions)) {
              appData = imported;
              saveData();
              setupEntryFormDefaults();
              renderDashboard();
              showToast('બેકઅપ ડેટા સફળતાપૂર્વક રીસ્ટોર થઈ ગયો!', 'success');
            } else {
              showToast('અમાન્ય બેકઅપ ફાઇલ!', 'error');
            }
          } catch (err) {
            showToast('ફાઇલ વાંચવામાં ભૂલ આવી!', 'error');
          }
        };
        reader.readAsText(file);
      });

      // Reset Sample Data
      document.getElementById('btn-reset-sample-data').addEventListener('click', () => {
        appData = JSON.parse(JSON.stringify(defaultData));
        saveData();
        setupEntryFormDefaults();
        renderDashboard();
        showToast('સેમ્પલ ડેટા રીસેટ થઈ ગયો!', 'success');
      });
    }

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRentManagerApp);
} else {
  initRentManagerApp();
}
