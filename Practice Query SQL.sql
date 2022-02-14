-- cari customers yang tinggal di negara USA dan tidak tinggal di suite lalu urutkan berdasarkan credit limit dari yang paling rendah
select * from customers where country = 'USA' and addressLine2 is null order by creditLimit;

-- cari rata2 buyPrice per productLine lalu urutkan dari yang terbesar di tabel products
select productLine, avg(buyPrice) avg_BuyPrice from products group by productLine order by avg_BuyPrice desc;

-- dapatkan data dari table customers, cari yang country nya di USA dan France, order by customer name, dibatasi 5 data dimulai setelah data ke 3
select * from customers where country in ('USA', 'France') order by customerName limit 3, 5;

-- get data customer yang hanya membeli lewat sales, tinggal di negara germany, nama mengandung huruf n, dan urutkan berdarkan nama
select * from customers where salesRepEmployeeNumber is not null and country = 'Germany' and customerName like '%n%' order by customerName;