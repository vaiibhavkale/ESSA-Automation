import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedSiteType: string = 'ESSA'; // Default selected site type
  inactivatedSitesESSA: any[] = [ // Sample data
    { srNo: 1, programCode: 'ESSA123', testCenterName: 'Test Center A', testCenterFlag: 'Flag A', dateInactivated: '2024-04-01' },
    { srNo: 2, programCode: 'ESSA456', testCenterName: 'Test Center B', testCenterFlag: 'Flag B', dateInactivated: '2024-04-05' },
    { srNo: 3, programCode: 'ESSA789', testCenterName: 'Test Center C', testCenterFlag: 'Flag C', dateInactivated: '2024-04-10' },
    { srNo: 4, programCode: 'ESSA012', testCenterName: 'Test Center D', testCenterFlag: 'Flag D', dateInactivated: '2024-04-15' },
    { srNo: 5, programCode: 'ESSA345', testCenterName: 'Test Center E', testCenterFlag: 'Flag E', dateInactivated: '2024-04-20' },
    { srNo: 6, programCode: 'ESSA678', testCenterName: 'Test Center F', testCenterFlag: 'Flag F', dateInactivated: '2024-04-25' },
    { srNo: 7, programCode: 'ESSA901', testCenterName: 'Test Center G', testCenterFlag: 'Flag G', dateInactivated: '2024-04-30' },
    { srNo: 8, programCode: 'ESSA234', testCenterName: 'Test Center H', testCenterFlag: 'Flag H', dateInactivated: '2024-05-05' },
    { srNo: 9, programCode: 'ESSA567', testCenterName: 'Test Center I', testCenterFlag: 'Flag I', dateInactivated: '2024-05-10' },
    { srNo: 10, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 11, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 12, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 13, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 14, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 15, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 16, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 17, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 18, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 19, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 20, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 21, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 1, programCode: 'ESSA123', testCenterName: 'Test Center A', testCenterFlag: 'Flag A', dateInactivated: '2024-04-01' },
    { srNo: 2, programCode: 'ESSA456', testCenterName: 'Test Center B', testCenterFlag: 'Flag B', dateInactivated: '2024-04-05' },
    { srNo: 3, programCode: 'ESSA789', testCenterName: 'Test Center C', testCenterFlag: 'Flag C', dateInactivated: '2024-04-10' },
    { srNo: 4, programCode: 'ESSA012', testCenterName: 'Test Center D', testCenterFlag: 'Flag D', dateInactivated: '2024-04-15' },
    { srNo: 5, programCode: 'ESSA345', testCenterName: 'Test Center E', testCenterFlag: 'Flag E', dateInactivated: '2024-04-20' },
    { srNo: 6, programCode: 'ESSA678', testCenterName: 'Test Center F', testCenterFlag: 'Flag F', dateInactivated: '2024-04-25' },
    { srNo: 7, programCode: 'ESSA901', testCenterName: 'Test Center G', testCenterFlag: 'Flag G', dateInactivated: '2024-04-30' },
    { srNo: 8, programCode: 'ESSA234', testCenterName: 'Test Center H', testCenterFlag: 'Flag H', dateInactivated: '2024-05-05' },
    { srNo: 9, programCode: 'ESSA567', testCenterName: 'Test Center I', testCenterFlag: 'Flag I', dateInactivated: '2024-05-10' },
    { srNo: 10, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 11, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 12, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 13, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 14, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 15, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 16, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 17, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 18, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 19, programCode: 'ESSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 20, programCode: 'ESSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 21, programCode: 'ESSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    
    // Add more sample data as needed
  ];

  inactivatedSitesSSA: any[] = [
    // Sample data for SSA
    { srNo: 1, programCode: 'SSA456', testCenterName: 'Test Center B', testCenterFlag: 'Flag B', dateInactivated: '2024-04-05' },
    { srNo: 2, programCode: 'SSA123', testCenterName: 'Test Center A', testCenterFlag: 'Flag A', dateInactivated: '2024-04-01' },
    { srNo: 3, programCode: 'SSA789', testCenterName: 'Test Center C', testCenterFlag: 'Flag C', dateInactivated: '2024-04-10' },
    { srNo: 4, programCode: 'SSA012', testCenterName: 'Test Center D', testCenterFlag: 'Flag D', dateInactivated: '2024-04-15' },
    { srNo: 5, programCode: 'SSA345', testCenterName: 'Test Center E', testCenterFlag: 'Flag E', dateInactivated: '2024-04-20' },
    { srNo: 6, programCode: 'SSA678', testCenterName: 'Test Center F', testCenterFlag: 'Flag F', dateInactivated: '2024-04-25' },
    { srNo: 7, programCode: 'SSA901', testCenterName: 'Test Center G', testCenterFlag: 'Flag G', dateInactivated: '2024-04-30' },
    { srNo: 8, programCode: 'SSA234', testCenterName: 'Test Center H', testCenterFlag: 'Flag H', dateInactivated: '2024-05-05' },
    { srNo: 9, programCode: 'SSA567', testCenterName: 'Test Center I', testCenterFlag: 'Flag I', dateInactivated: '2024-05-10' },
    { srNo: 10, programCode: 'SSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 11, programCode: 'SSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 12, programCode: 'SSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 13, programCode: 'SSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 14, programCode: 'SSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 15, programCode: 'SSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 16, programCode: 'SSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 17, programCode: 'SSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 18, programCode: 'SSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
    { srNo: 19, programCode: 'SSA890', testCenterName: 'Test Center J', testCenterFlag: 'Flag J', dateInactivated: '2024-05-15' },
    { srNo: 20, programCode: 'SSA123', testCenterName: 'Test Center K', testCenterFlag: 'Flag K', dateInactivated: '2024-05-20' },
    { srNo: 21, programCode: 'SSA456', testCenterName: 'Test Center L', testCenterFlag: 'Flag L', dateInactivated: '2024-05-25' },
  ];

  currentPage: number = 1;
  itemsPerPage: number = 10; // Display 10 items per page
  totalPages: number = 0;
  displayedSites: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalPages();
    this.updateDisplayedSites();
  }

  calculateTotalPages() {
    const sites = this.selectedSiteType === 'ESSA' ? this.inactivatedSitesESSA : this.inactivatedSitesSSA;
    this.totalPages = Math.ceil(sites.length / this.itemsPerPage);
  }

  updateDisplayedSites() {
    const sites = this.selectedSiteType === 'ESSA' ? this.inactivatedSitesESSA : this.inactivatedSitesSSA;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedSites = sites.slice(startIndex, endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedSites();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedSites();
    }
  }

  onSiteTypeChange() {
    this.calculateTotalPages();
    this.updateDisplayedSites();
  }

  goToPage(page: number | string) {
    if (typeof page === 'number') {
      this.currentPage = page;
      this.updateDisplayedSites();
    }
  }
  
  getPageNumbers(): (number | string)[] {
    const pageCount = Math.min(10, this.totalPages);
    const currentPageIndex = this.currentPage - 1;
    const pages: (number | string)[] = [];
  
    if (this.totalPages <= 10) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  
    if (currentPageIndex <= 1) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(this.totalPages);
    } else if (currentPageIndex >= this.totalPages - 5) {
      pages.push(1);
      pages.push('...');
      for (let i = this.totalPages - 4; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
  
      for (let i = currentPageIndex - 1; i <= currentPageIndex + 1; i++) {
        pages.push(i + 1);
      }
  
      pages.push('...');
      pages.push(this.totalPages);
    }
  
    return pages;
  }
}