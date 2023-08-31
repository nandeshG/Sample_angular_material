import { SelectionModel } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { values } from '../values';

// const elements:values[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',longDescription:'this is Hydrogen'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',longDescription:'this is Helium'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',longDescription:'this is Lithium'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',longDescription:'this is Beryllium'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',longDescription:'this is Boron'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',longDescription:'this is Carbon'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',longDescription:'this is Nitrogen'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',longDescription:'this is Oxygen'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',longDescription:'this is Fluorine'},
  
// ];
interface CourseNode {
  name: string;
  children?: CourseNode[];
}

const TREE_DATA: CourseNode[] = [
  {
    name: 'Angular For Beginners',
    children: [
      {
        name: 'Introduction to Angular'
      },
      {
        name: 'Angular Component @Input()'
      },
      {
        name: 'Angular Component @Output()'
      }
    ],
  },
  {
    name: 'Angular Material In Depth',
    children: [
      {
        name: 'Introduction to Angular Material',
        children: [
          {
            name: 'Form Components'
          },
          {
            name: 'Navigation and Containers'
          }
        ],
      },
      {
        name: 'Advanced Angular Material',
        children: [
          {
            name: 'Custom Themes'
          },
          {
            name: 'Tree Components'
          }
        ],
      },
    ],
  },
];
@Component({
  selector: 'app-acontact',
  templateUrl: './acontact.component.html',
  styleUrls: ['./acontact.component.css']
})
export class AcontactComponent implements OnInit{

  elements:values[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',longDescription:'this is Hydrogen'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',longDescription:'this is Helium'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',longDescription:'this is Lithium'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',longDescription:'this is Beryllium'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',longDescription:'this is Boron'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',longDescription:'this is Carbon'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',longDescription:'this is Nitrogen'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',longDescription:'this is Oxygen'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',longDescription:'this is Fluorine'},
    
  ];
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;  
  expandedRow:any ;
  displayedColumns: string[] = ['select','position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.elements);
  selection = new SelectionModel<values>(true, [])
  nestedTreeNodeDataSource = new MatTreeNestedDataSource<CourseNode>();
  nestedTreeControl = new NestedTreeControl<CourseNode>(node => node.children)


  ngOnInit() {

    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
      this.nestedTreeNodeDataSource.data = TREE_DATA;
    });
  }  

  epandRow(row:values){
    console.log(row)
   if(row == this.expandedRow){
    this.expandedRow = null
   }
   else{
    this.expandedRow = row;
   }
  }

  onSelectToggle(element:values){
    this.selection.toggle(element)
  }

  isSelectAll(){
    return this.selection.selected?.length == this.elements?.length
  }

  toggleAll(){
    if(this.isSelectAll()){
      this.selection.clear()
    }
    else{
      this.selection.select(...this.elements)
    }
  }

  // hasNestedChild(index:number, node:CourseNode){
  //   return node.children.length > 0
  // }
//  ngAfterViewInit(){
//     this.paginator.page.subscribe(()=>{
//       this.dataSource
//     })
//  }

}

