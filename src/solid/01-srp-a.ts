(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }
  class NotificationService {
    notifyClients(emailList: string[], template: "client" | "brands") {
      console.log(
        "Enviando correo a los clientes",
        emailList.join("-"),
        template
      );
    }
  }

  class ProductBloc {
    public productService: ProductService;
    public notificationService: NotificationService;

    constructor(
      productService: ProductService,
      notificationService: NotificationService
    ) {
      this.productService = productService;
      this.notificationService = notificationService;
    }

    loadProduct(id: number) {
      this.productService.loadProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients(emails: string[] = []) {
      this.notificationService.notifyClients(emails, "client");
    }
  }
  class CartBloc {
    addToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const notificationService = new NotificationService();

  const productBloc = new ProductBloc(productService, notificationService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
